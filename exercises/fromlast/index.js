"use strict";
// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'
exports.__esModule = true;
function fromLast(list, n) {
    var slow = list.getFirst();
    var fast = list.getFirst();
    for (var i = 0; i < n; i++) {
        fast = fast === null || fast === void 0 ? void 0 : fast.next;
    }
    while (fast === null || fast === void 0 ? void 0 : fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
}
module.exports = fromLast;
