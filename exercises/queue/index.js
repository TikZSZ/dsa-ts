// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;
var Queue = /** @class */ (function () {
  function Queue(size) {
      if (size === void 0) { size = 10; }
      this.queue = new Array(size).fill(undefined);
      this.insertPos = size - 1;
      this.removePos = size - 1;
  }
  Queue.prototype.add = function (el) {
      if (this.queue[this.insertPos] !== undefined) {
          console.log("queue full");
          return;
      }
      else {
          this.queue[this.insertPos] = el;
          this.insertPos - 1 === -1 ? this.insertPos = this.queue.length - 1 : this.insertPos--;
      }
  };
  Queue.prototype.remove = function () {
      if (this.queue[this.removePos] !== undefined) {
          var el = this.queue[this.removePos];
          this.queue[this.removePos] = undefined;
          this.removePos - 1 === -1 ? this.removePos = this.queue.length - 1 : this.removePos--;
          return el;
      }
      else {
          console.log("queue empty");
          return;
      }
  };
  return Queue;
}());
module.exports = Queue;
