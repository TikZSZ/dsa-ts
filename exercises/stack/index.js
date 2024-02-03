// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1
var Stack = /** @class */ (function () {
    function Stack(size) {
        if (size === void 0) { size = 10; }
        this.size = size;
        this.count = 0;
        this.stack = new Array(this.size).fill(0);
    }
    Stack.prototype.push = function (el) {
        if (this.count === this.size) {
            console.log("stack full");
            return undefined;
        }
        this.stack[this.count] = el;
        this.count++;
        return el;
    };
    Stack.prototype.pop = function () {
        if (this.count === -1) {
            console.log("stack empty");
            return undefined;
        }
        var el = this.stack[this.count - 1];
        console.log(this.stack, this.count);
        this.count--;
        return el;
    };
    Stack.prototype.peek = function () {
        return this.stack[this.count - 1];
    };
    return Stack;
}());
var stack = new Stack(2);
stack.push(1);
stack.push(2);
console.log(stack.pop());
module.exports = Stack;
