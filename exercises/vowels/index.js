// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0
var vowelMap = {
  "a": 1,
  "e": 1,
  "i": 1,
  "o": 1,
  "u": 1
};
function vowels(str) {
  var startTime = Date.now();
  str = str.toLocaleLowerCase();
  var numberOfVowels = 0;
  var charMap = {};
  for (var i = 0; i < str.length; i++) {
      var char = str[i];
      if (charMap[char]) {
          charMap[char] = charMap[char] + 1;
      }
      else {
          charMap[char] = 1;
      }
  }
  for (var vowel in vowelMap) {
      if (charMap[vowel]) {
          numberOfVowels += charMap[vowel];
      }
  }
  var endTime = Date.now();
  var timeTook = (endTime - startTime);
  console.log("Took ".concat(timeTook, " MilliSeconds"));
  return numberOfVowels;
}
module.exports = vowels;
// const vowels = ["a","e","i","o","u","1"]
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     if(vowels.includes(char)) numberOfVowels += 1
//   }
//   return numberOfVowels
