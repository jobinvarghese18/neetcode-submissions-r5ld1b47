class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
      if(s.length !== t.length) return false
      const hashMap = {};

      for(let char of s){
        hashMap[char] = (hashMap[char] || 0) + 1;
      }

      for(const char of t){
        if(!hashMap[char]) return false;
        hashMap[char]--;
      }
      return true;
    }
}
