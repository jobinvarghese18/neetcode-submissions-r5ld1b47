class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = []; // (([])) -> stack (([ , ] => match with it's pair that should be last element in stack array.
        let array = s.split("")
        const pairs = {
            ")": "(",
            "]": "[",
            "}": "{",
        };

        for (let i = 0; i < array.length; i++) {
            if (["(", "[", "{"].includes(array[i])) {
              stack.push(array[i]);
            } else if (stack.length ===0 || stack[stack.length - 1] !== pairs[array[i]]) {
                return false
            }else if(stack[stack.length - 1] === pairs[array[i]]){
             stack.pop() // It will remove last element
            }
        }
        return stack.length === 0
    }
}
