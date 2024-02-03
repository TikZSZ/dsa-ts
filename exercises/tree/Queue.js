"use strict";
exports.__esModule = true;
exports.Queue = void 0;
var LinkedList_1 = require("./LinkedList");
var Queue = /** @class */ (function () {
    function Queue() {
        this.queue = new LinkedList_1.LinkedList();
    }
    Queue.prototype.add = function (data) {
        this.queue.insertLast(data);
    };
    Queue.prototype.remove = function () {
        if (this.isEmpty()) {
            console.log("queue is empty");
            return;
        }
        var firstNode = this.queue.getFirst();
        this.queue.removeFirst();
        return firstNode.data;
    };
    Queue.prototype.peek = function () {
        return this.queue.getFirst();
    };
    Queue.prototype.isEmpty = function () {
        return this.queue.size() < 1;
    };
    return Queue;
}());
exports.Queue = Queue;
