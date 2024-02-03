"use strict";
// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true
exports.__esModule = true;
function circular(list) {
    if (!list.getFirst())
        return false;
    var slow = list.getFirst();
    var fast = list.getFirst();
    while ((fast === null || fast === void 0 ? void 0 : fast.next) && fast.next.next) {
        if ((fast === null || fast === void 0 ? void 0 : fast.next) === slow || (fast === null || fast === void 0 ? void 0 : fast.next.next) === slow) {
            return true;
        }
        slow = slow === null || slow === void 0 ? void 0 : slow.next;
        fast = fast === null || fast === void 0 ? void 0 : fast.next.next;
    }
    return false;
}
module.exports = circular;
