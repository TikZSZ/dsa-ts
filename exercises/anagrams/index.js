// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {var strA = stringA.replace(/[^\w]/g, "").toLocaleLowerCase();
var strB = stringB.replace(/[^\w]/g, "").toLocaleLowerCase();
var strAMap = strToMap(strA);
var strBMap = strToMap(strB);
if (Object.keys(strAMap).length !== Object.keys(strBMap).length) {
    return false;
}
for (var char in strBMap) {
    if (strAMap[char] !== strBMap[char]) {
        return false;
    }
}
return true;
}
function strToMap(str) {
var mapObj = {};
for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (mapObj[char]) {
        mapObj[char] = mapObj[char] + 1;
    }
    else {
        mapObj[char] = 1;
    }
}
return mapObj;
}

module.exports = anagrams;
