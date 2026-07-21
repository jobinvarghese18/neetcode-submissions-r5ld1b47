class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = new Set();
        let result = false

        for(let i=0; i<nums.length; i++){
            const num = nums[i]
            if(seen.has(nums[i])) result = true
            seen.add(num,i)
        }
        return result;
    }
}
