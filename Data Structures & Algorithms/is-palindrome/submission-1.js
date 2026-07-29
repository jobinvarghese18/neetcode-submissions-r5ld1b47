class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let a=s.replace(/[^a-zA-Z0-9]/g,'');
        console.log(a.length)
        for(let i=0; i<Math.floor(a.length/2); i++){
            console.log(a[i], a[a.length-1-i], a.length-1-i)
            if(a[i].toLowerCase() !== a[a.length-1-i].toLowerCase()){
                return false
            }
        }
        return true;
    }
}
