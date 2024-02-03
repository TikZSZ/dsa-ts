// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const chars = {}
  for (const char of str) {
    if(chars[char]) chars[char] = 1
    else chars[char] = chars[char]+1
  }
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      const element = object[key];
      for (const d of chars) {
    
      }
    }
  }
}

module.exports = maxChar;
