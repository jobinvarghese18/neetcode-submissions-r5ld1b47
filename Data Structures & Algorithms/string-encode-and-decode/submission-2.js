class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
      return strs.map((str)=> `${str.length}#${str}`).join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
      let i = 0;
      let result = [];

      while(i<str.length){
        let j=i;

        while(str[j] != '#'){
          j++
        }

        const len = Number(str.slice(i,j))

        const start = j+1;
        result = [...result, str.slice(start, start+len)]
        i=start+len
      }
      return result;
    }
}
