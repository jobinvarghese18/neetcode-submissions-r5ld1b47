class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
      const sCharacters = new Map();
      if(s.length != t.length) return false;

      for(const char of s){
        sCharacters.set(char, (sCharacters.get(char) || 0)+ 1)
      }

      for(const char of t){
        if(sCharacters.get(char)<1 || !sCharacters.get(char)) return false;

        sCharacters.set(char, sCharacters.get(char)-1)
      }
      return true;
    }
}
