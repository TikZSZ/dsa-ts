// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

export function reverse(str:string) {
  let newstr = ""
  for (let i = str.length; i > 0; i--) {
    const char = str[i-1];
    newstr += char
  }
  return newstr
}
