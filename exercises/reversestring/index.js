"use strict";
// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
exports.__esModule = true;
exports.reverse = void 0;
function reverse(str) {
    var newstr = "";
    for (var i = str.length; i > 0; i--) {
        var char = str[i - 1];
        newstr += char;
    }
    return newstr;
}
exports.reverse = reverse;
