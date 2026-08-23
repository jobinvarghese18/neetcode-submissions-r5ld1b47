class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        const lastMinStack = this.minStack[this.minStack.length-1]
        if(lastMinStack === undefined || lastMinStack >= val){
            this.minStack.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop() {
       const poppedElement =  this.stack.pop();
       if(poppedElement === this.minStack[this.minStack.length-1]){
            this.minStack.pop()
       }

    }

    /**
     * @return {number}
     */
    top() {
       return this.stack[this.stack.length-1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length-1]
    }
}
