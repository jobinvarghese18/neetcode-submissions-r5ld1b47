class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hasDuplicate = new Set([]);

        for(const num of nums){
            if(hasDuplicate.has(num)) return true;
            else hasDuplicate.add(num)
        }
        return false;
    }
}
