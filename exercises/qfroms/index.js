// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2
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
      this.count--;
      return el;
  };
  Stack.prototype.peek = function () {
      return this.stack[this.count - 1];
  };
  return Stack;
}());
var Queue = /** @class */ (function () {
  function Queue(size) {
      if (size === void 0) { size = 4; }
      this.size = size;
      this.stack1 = new Stack(this.size);
      this.stack2 = new Stack(this.size);
  }
  Queue.prototype.add = function (el) {
      return this.stack1.push(el);
  };
  Queue.prototype.remove = function () {
      this.fillOtherStack();
      return this.stack2.pop();
  };
  Queue.prototype.fillOtherStack = function () {
      if (!(this.stack1.peek() && this.stack2.size - this.stack2.count))
          return;
      var totalNumberOfValidIters = this.stack2.size - this.stack2.count;
      for (var i = 0; i < totalNumberOfValidIters; i++) {
          var el = this.stack1.pop();
          if (el) {
              this.stack2.push(el);
          }
          else {
              break;
          }
      }
  };
  Queue.prototype.peek = function () {
      this.fillOtherStack();
      return this.stack2.peek();
  };
  return Queue;
}());
// inserStack
// removeStack
// 1 2 3 4 5 => stack
// 5 4 3 2 1
module.exports = Queue;
