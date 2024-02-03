"use strict";
// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.
exports.__esModule = true;
exports.BinaryTree = void 0;
var Node = /** @class */ (function () {
    function Node(data, left, right) {
        if (left === void 0) { left = null; }
        if (right === void 0) { right = null; }
        this.data = data;
        this.left = left;
        this.right = right;
    }
    return Node;
}());
var BST = /** @class */ (function () {
    function BST(data) {
        this.root = null;
        if (data) {
            this.root = new Node(data);
        }
    }
    BST.prototype.insert = function (data) {
        if (!this.root)
            this.root = new Node(data);
        var currentNode = this.root;
        while (true) {
            if (data > currentNode.data) {
                if (currentNode.right !== null) {
                    currentNode = currentNode.right;
                }
                else {
                    currentNode.right = new Node(data);
                    break;
                }
            }
            else if (data < currentNode.data) {
                if (currentNode.left !== null) {
                    currentNode = currentNode.left;
                }
                else {
                    currentNode.left = new Node(data);
                    break;
                }
            }
            else {
                // Handle the case where data is equal to currentNode.data
                // You can choose to ignore, update, or handle it in a specific way
                // For example, you might choose not to insert duplicates.
                break;
            }
        }
        // if(data < this.data && !this.left){
        //   this.left = new Node(data)
        // }else if(data < this.data && this.left){
        //   this.left.insert(data)
        // }
        // if(data > this.data && !this.right){
        //   this.right = new Node(data)
        // }else if(data > this.data && this.right){
        //   this.right.insert(data)
        // }
    };
    BST.prototype.contains = function (data) {
        var currentNode = this.root;
        while (currentNode && currentNode.data !== data) {
            if (currentNode.data > data) {
                currentNode = currentNode.left;
            }
            if (currentNode.data < data) {
                currentNode = currentNode.right;
            }
        }
        return currentNode;
    };
    return BST;
}());
exports.BinaryTree = BST;
