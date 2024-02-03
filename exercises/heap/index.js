"use strict";
exports.__esModule = true;
exports.MinHeap = void 0;
var MinHeap = /** @class */ (function () {
    function MinHeap() {
        this.heap = [];
        // order,index
        this.valuesToIndex = new Map();
    }
    MinHeap.prototype.add = function (order, value) {
        this.heap.push({ order: order, value: value });
        var pos = this.heap.length - 1;
        this.valuesToIndex.set(order, pos);
        this.heapifyUp(pos);
    };
    MinHeap.prototype.remove = function (order) {
        if (!order) {
            var topVal = this.heap[0];
            this.heap[0] = this.heap[this.heap.length - 1];
            this.heap.pop();
            this.heapifyDown(0);
            return topVal;
        }
        var indexToRemove = this.valuesToIndex.get(order);
        if (indexToRemove !== undefined) {
            var topVal = this.heap[indexToRemove];
            this.swap(this.heap, indexToRemove, this.heap.length - 1);
            this.valuesToIndex.set(this.heap[0].order, 0);
            this.heap.pop();
            this.valuesToIndex["delete"](order);
            this.heapifyDown(indexToRemove);
            return topVal;
        }
    };
    MinHeap.prototype.heapifyUp = function (pos) {
        var currentPos = pos;
        while (true) {
            var currentRecord = this.heap[currentPos].order;
            var currentParent = this.getParent(currentPos).order;
            if (currentRecord < currentParent) {
                this.swap(this.heap, currentPos, Math.floor(Math.max((currentPos - 1) / 2, 0)));
                this.valuesToIndex.set(currentParent, currentPos);
                currentPos = Math.floor(Math.max((currentPos - 1) / 2, 0));
                this.valuesToIndex.set(currentRecord, currentPos);
            }
            else {
                break;
            }
        }
    };
    MinHeap.prototype.swap = function (arr, i, j) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    };
    MinHeap.prototype.heapifyDown = function (pos) {
        var currentPos = pos;
        while (true) {
            var largest = currentPos;
            var currentParent = this.heap[largest];
            var leftChild = this.getLeftChild(largest);
            var rightChild = this.getRightChild(largest);
            if (leftChild && currentParent.order > leftChild.order) {
                // 4 > 3
                largest = currentPos * 2 + 1;
                this.valuesToIndex.set(leftChild.order, currentPos);
            }
            if (rightChild && currentParent.order > rightChild.order) {
                largest = currentPos * 2 + 2;
                this.valuesToIndex.set(rightChild.order, currentPos);
            }
            if (largest !== currentPos) {
                this.swap(this.heap, currentPos, largest);
                currentPos = largest;
                this.valuesToIndex.set(currentParent.order, currentPos);
            }
            else {
                break;
            }
        }
    };
    MinHeap.prototype.getParent = function (pos) {
        return this.heap[Math.floor(Math.max((pos - 1) / 2, 0))];
    };
    MinHeap.prototype.getLeftChild = function (pos) {
        pos = pos * 2 + 1;
        return this.heap[pos];
    };
    MinHeap.prototype.getRightChild = function (pos) {
        pos = pos * 2 + 2;
        return this.heap[pos];
    };
    return MinHeap;
}());
exports.MinHeap = MinHeap;
