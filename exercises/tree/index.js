"use strict";
// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree
exports.__esModule = true;
exports.Tree = exports.Node = void 0;
var Queue_1 = require("./Queue");
var Stack_1 = require("./Stack");
var Node = /** @class */ (function () {
    function Node(data, children) {
        if (children === void 0) { children = []; }
        this.data = data;
        this.children = children;
    }
    Node.prototype.add = function (data) {
        var newNode = new Node(data);
        this.children.push(newNode);
    };
    Node.prototype.remove = function (data) {
        this.children = this.children.filter(function (node) { return node.data !== data; });
    };
    return Node;
}());
exports.Node = Node;
var Tree = /** @class */ (function () {
    function Tree() {
        this.root = null;
    }
    Tree.prototype.traverseBF = function (fn) {
        var q = new Queue_1.Queue();
        if (!this.root)
            return;
        q.add(this.root);
        while (!q.isEmpty()) {
            var node = q.remove();
            fn.call(this, node);
            node.children.map(function (node) {
                q.add(node);
            });
        }
    };
    Tree.prototype.traverseDF = function (fn) {
        if (!this.root)
            return;
        var s = new Stack_1.Stack();
        s.push(this.root);
        while (!s.isEmpty()) {
            var node = s.pop();
            fn.call(this, node);
            console.log(s.peek());
            if (node.children.length > 0) {
                for (var i = node.children.length - 1; i >= 0; i--) {
                    s.push(node.children[i]);
                }
            }
        }
    };
    return Tree;
}());
exports.Tree = Tree;
module.exports = { Tree: Tree, Node: Node };
