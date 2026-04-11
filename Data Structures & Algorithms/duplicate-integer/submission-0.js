class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
      let isDuplicate = false;
      for(const num of nums) {
        if(nums.lastIndexOf(num) !== nums.indexOf(num)) isDuplicate = true
      }
      return isDuplicate;
    }
}
