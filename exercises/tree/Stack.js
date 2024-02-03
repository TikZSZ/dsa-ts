"use strict";
exports.__esModule = true;
exports.Stack = void 0;
var LinkedList_1 = require("./LinkedList");
var Stack = /** @class */ (function () {
    function Stack() {
        this.queue = new LinkedList_1.LinkedList();
    }
    Stack.prototype.push = function (data) {
        this.queue.insertFirst(data);
    };
    Stack.prototype.pop = function () {
        if (this.isEmpty()) {
            console.log("queue is empty");
            return;
        }
        var firstNode = this.queue.getFirst();
        this.queue.removeFirst();
        return firstNode.data;
    };
    Stack.prototype.peek = function () {
        if (this.isEmpty()) {
            return null;
        }
        else {
            return this.queue.getFirst().data;
        }
    };
    Stack.prototype.isEmpty = function () {
        return this.queue.size() < 1;
    };
    return Stack;
}());
exports.Stack = Stack;
