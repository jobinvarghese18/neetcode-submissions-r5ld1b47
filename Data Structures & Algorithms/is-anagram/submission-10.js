class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
      const map = new Map();
      if(s.length != t.length) return false;

      for(const char of s){
        map.set(char, (map.get(char) || 0)+ 1)
      }

      for(const char of t){
        if(map.get(char)<1 || !map.get(char)) return false;

        map.set(char, map.get(char)-1)
      }
      return true;
    }
}
