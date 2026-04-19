class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        const newMap = new Map();

        for(const num of nums){
            if(map.has(num)){
                map.set(num, map.get(num)+1)
            }
            else{
                map.set(num, 1);
            }
        }

       const result =  [...map.values()].sort((a, b)=> b-a);
       console.log(result,'result')
       console.log(map,'map')
       const newResult = [];
        for(let i=0; i<k; i++){
           const keys =  [...map.keys()]
           for(let key of keys){
            console.log(i,'i', map.get(key))

            if(map.get(key) === result[i]){
               newResult.push(key)
               map.delete(key)
            }
           }
        }

        console.log(newResult,'new result')
        return newResult;
    }
}
