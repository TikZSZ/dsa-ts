"use strict";
var Queue = /** @class */ (function () {
    function Queue(size) {
        if (size === void 0) { size = 10; }
        this.size = size;
        this.queue = new Array(this.size).fill(undefined);
        this.insertPos = 0;
        this.removePos = 0;
    }
    Queue.prototype.add = function (el) {
        if (this.queue[this.insertPos] !== undefined) {
            console.log("queue full");
            return;
        }
        else {
            this.queue[this.insertPos] = el;
            this.insertPos = (this.insertPos + 1) % this.size;
        }
    };
    Queue.prototype.remove = function () {
        if (this.queue[this.removePos] !== undefined) {
            var el = this.queue[this.removePos];
            this.queue[this.removePos] = undefined;
            this.removePos = (this.removePos + 1) % this.size;
            return el;
        }
        else {
            console.log("queue empty");
            return;
        }
    };
    Queue.prototype.peek = function () {
        return this.queue[this.removePos];
    };
    return Queue;
}());
module.exports = Queue;
// const queue = new Queue<number>(20)
// for (let i = 0; i < 10; i++) {
//   queue.add(i)
// }
// for (let i = 0; i < 10; i++) {
//   const val = queue.remove()
//   console.log(val);
// }
// for (let i = 10; i < 20; i++) {
//   queue.add(i)
// }
// for (let i = 10; i < 20; i++) {
//   const val = queue.remove()
//   console.log(val);
// }
