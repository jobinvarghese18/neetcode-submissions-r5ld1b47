class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
       for(let i=0; i<=nums.length; i++){
        for(let j=0; j<=nums.length; j++){
           const sum = nums[i]+nums[j] 
            if(j !== i && sum===target){
               return [i,j]
            }
        }
       }
    }
}
