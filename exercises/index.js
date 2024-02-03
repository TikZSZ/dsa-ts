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
var _a;
exports.__esModule = true;
exports.AVLTree = void 0;
var Node = /** @class */ (function () {
    function Node(data, left, right) {
        if (left === void 0) { left = null; }
        if (right === void 0) { right = null; }
        this.data = data;
        this.left = left;
        this.right = right;
        this.height = 0;
    }
    return Node;
}());
var AVL = /** @class */ (function () {
    function AVL(data) {
        this.root = null;
        if (data) {
            this.root = new Node(data);
        }
    }
    AVL.prototype.height = function (node) {
        if (!node) {
            return -1;
        }
        return node.height;
    };
    AVL.prototype.insert = function (data) {
        if (!this.root)
            this.root = new Node(data);
        var currentNode = this.root;
        var path = [currentNode];
        while (true) {
            if (data > currentNode.data) {
                if (currentNode.right !== null) {
                    currentNode = currentNode.right;
                    path.push(currentNode);
                }
                else {
                    this.insertNode(path, "right", data);
                    break;
                }
            }
            else if (data < currentNode.data) {
                if (currentNode.left !== null) {
                    currentNode = currentNode.left;
                    path.push(currentNode);
                }
                else {
                    this.insertNode(path, "left", data);
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
    };
    AVL.prototype.insertNode = function (nodes, pos, data) {
        nodes = nodes.reverse();
        var node = nodes[0];
        node[pos] = new Node(data);
        for (var i = 0; i < nodes.length; i++) {
            node.height = Math.max(this.height(node.left), this.height(node.right)) + 1;
            if (this.height(node.left) - this.height(node.right) > 1) {
                // left heavy
                if (this.height(node.left.left) - this.height(node.left.right) > 0) {
                    // left left case
                    this.rightRotate(node);
                }
                if (this.height(node.left.left) - this.height(node.left.right) < 0) {
                    // left right case
                    node.left = this.leftRotate(node.left);
                    this.rightRotate(node);
                }
            }
            if (this.height(node.left) - this.height(node.right) < -1) {
                // right heavy
                if (this.height(node.right.left) - this.height(node.right.right) < 0) {
                    // right right case
                    this.leftRotate(node);
                }
                if (this.height(node.right.left) - this.height(node.right.right) > 0) {
                    // left right case
                    node.right = this.rightRotate(node.right);
                    this.leftRotate(node);
                }
            }
            node = nodes[i + 1];
        }
    };
    AVL.prototype.rightRotate = function (p) {
        var c = p.left;
        var t = c.right;
        c.right = p;
        p.left = t;
        p.height = Math.max(this.height(p.left), this.height(p.right)) + 1;
        c.height = Math.max(this.height(c.left), this.height(c.right)) + 1;
        return c;
    };
    AVL.prototype.leftRotate = function (c) {
        var p = c.right;
        var t = p.left;
        p.left = c;
        c.right = t;
        p.height = Math.max(this.height(p.left), this.height(p.right)) + 1;
        c.height = Math.max(this.height(c.left), this.height(c.right)) + 1;
        return p;
    };
    AVL.prototype.contains = function (data) {
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
    AVL.prototype.display = function (node, details) {
        if (!node && !details) {
            this.display(this.root, "Root Node: ");
        }
        if (node == null) {
            return;
        }
        console.log(details + node.data);
        this.display(node.left, "Left child of " + node.data + " : ");
        this.display(node.right, "Right child of " + node.data + " : ");
    };
    return AVL;
}());
exports.AVLTree = AVL;
var avlTree = new exports.AVLTree();
for (var i = 0; i < 1000; i++) {
    avlTree.insert(i);
}
console.log((_a = avlTree.root) === null || _a === void 0 ? void 0 : _a.height);
