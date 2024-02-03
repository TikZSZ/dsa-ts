// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//   const start = Date.now()
//   const newn = n.toString()
//   const sign = Math.sign(n)
//   let reversed = ""
//   for (const char of newn) {
//     if(char === "-") continue
//     reversed = char + reversed
//   }
//   console.log(reversed);
//   const end = Date.now()
//   console.log((end-start));
//   return sign*parseInt(reversed)
// }

// super fast mathmatical method
// execut speed < 1ms 
function reverseInt(n) {
  const start = Date.now()
  let reversed = 0
  let sign = Math.sign(n)
  if(sign === -1) n = n*-1
  while(n > 1) {
    const lastDigit = Math.floor(n)%10
    reversed = reversed*10 + lastDigit
    n = n/10
  }
  const end = Date.now()
  console.log((start-end));
  return sign*reversed
}

module.exports = reverseInt;
