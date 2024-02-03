"use strict";
// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]
exports.__esModule = true;
var Queue_1 = require("./Queue");
function levelWidth(root) {
    if (!root)
        return;
    var levelWidths = [];
    var q = new Queue_1.Queue();
    q.add(root);
    q.add('s');
    var counter = 0;
    while (!q.isEmpty()) {
        var node = q.remove();
        if (typeof node === 'string') {
            levelWidths.push(counter);
            counter = 0;
            if (!q.isEmpty()) {
                q.add('s');
            }
            continue;
        }
        counter++;
        node.children.map(function (node) {
            q.add(node);
        });
    }
    return levelWidths;
}
module.exports = levelWidth;
