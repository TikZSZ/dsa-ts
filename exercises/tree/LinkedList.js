"use strict";
// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.LinkedList = exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(data, next) {
        this.data = data;
        this.next = next;
    }
    return Node;
}());
exports.Node = Node;
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.index = 0;
        this.head = null;
        this.tail = null;
        this.count = 0;
    }
    LinkedList.prototype.insertFirst = function (data) {
        if (!this.head || !this.tail) {
            var firstNode = new Node(data, null);
            this.head = firstNode;
            this.tail = firstNode;
        }
        else {
            this.head = new Node(data, this.head);
        }
        this.count++;
    };
    LinkedList.prototype.insertLast = function (data) {
        if (!this.head || !this.tail) {
            var firstNode = new Node(data, null);
            this.head = firstNode;
            this.tail = firstNode;
        }
        else {
            var currentLastNode = this.getLast();
            var newLastNode = new Node(data, null);
            currentLastNode.next = newLastNode;
            this.tail = newLastNode;
        }
        this.count++;
    };
    LinkedList.prototype.insertAt = function (data, index) {
        if (index === 0) {
            return this.insertFirst(data);
        }
        else if (index + 1 < this.count) {
            var currentNode = this.head;
            for (var i = 0; i < index - 1; i++) {
                currentNode = currentNode.next;
            }
            var newNode = new Node(data, currentNode.next);
            currentNode.next = newNode;
            this.count++;
            return newNode;
        }
        else {
            return this.insertLast(data);
        }
    };
    LinkedList.prototype.getFirst = function () {
        return this.head;
    };
    LinkedList.prototype.getLast = function () {
        return this.tail;
    };
    LinkedList.prototype.getAt = function (index) {
        if (!this.head)
            return null;
        if (index >= this.count) {
            console.log("GetAt failed: index out of range");
            return null;
        }
        var currentNode = this.head;
        for (var i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode;
    };
    LinkedList.prototype.removeFirst = function () {
        if (!this.head)
            return;
        var secondNode = this.head.next;
        this.head = secondNode;
        this.count--;
        return secondNode;
    };
    LinkedList.prototype.removeLast = function () {
        if (!this.head)
            return;
        var previousNode = null;
        var currentNode = this.head;
        while (true) {
            if (currentNode.next === null && previousNode === null) {
                this.head = null;
                this.tail = null;
                break;
            }
            else if (currentNode.next === null) {
                previousNode.next = null;
                this.tail = previousNode;
                break;
            }
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        this.count--;
        return currentNode;
    };
    LinkedList.prototype.removeAt = function (index) {
        if (!this.head)
            return null;
        if (index >= this.count) {
            console.log("RemoveAt failed: index out of range");
            return null;
        }
        if (index === 0) {
            return this.removeFirst();
        }
        else if (index + 1 < this.count) {
            var currentNode = this.head;
            for (var i = 0; i < index - 1; i++) {
                currentNode = currentNode.next;
            }
            currentNode.next = currentNode.next.next;
            this.count--;
            return currentNode;
        }
        else {
            return this.removeLast();
        }
    };
    LinkedList.prototype.size = function () {
        return this.count;
    };
    LinkedList.prototype.clear = function () {
        if (!this.head)
            return;
        this.head = null;
        this.count = 0;
    };
    LinkedList.prototype.forEach = function (fn) {
        if (!this.head)
            throw new Error("List Empty");
        var currentNode = this.head;
        while (true) {
            fn.call(this, currentNode);
            if ((currentNode === null || currentNode === void 0 ? void 0 : currentNode.next) === null) {
                break;
            }
            currentNode = currentNode.next;
        }
    };
    LinkedList.prototype[Symbol.iterator] = function () {
        var node;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    node = this.head;
                    _a.label = 1;
                case 1:
                    if (!node) return [3 /*break*/, 3];
                    return [4 /*yield*/, node];
                case 2:
                    _a.sent();
                    node = node.next;
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/];
            }
        });
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
