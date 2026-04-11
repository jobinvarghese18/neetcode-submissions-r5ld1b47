class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
      const sCharacterCount = {};
      const tCharacterCount = {};

      if(s.length !== t.length) return false;

      for(let char of s){
        sCharacterCount[char] = (sCharacterCount[char] || 0)+1;
      }

       for(let char of t){
        tCharacterCount[char] = (tCharacterCount[char] || 0)+1;
      }
      
      for(const key in sCharacterCount){
        if(sCharacterCount[key] !== tCharacterCount[key]) return false;
      }
      return true
    }
}
