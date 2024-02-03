// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3
function fib(n, sequence) {
  if (sequence === void 0) { sequence = [0, 1]; }
  if (n < 2) {
    return n;
  }
  var previousVal = Number.isInteger(sequence[n - 1]) ? sequence[n - 1] : fib(n - 1, sequence);
  var previousPreviousVal = Number.isInteger(sequence[n - 2]) ? sequence[n - 2] : fib(n - 2, sequence);
  var nextVal = previousPreviousVal + previousVal;
  sequence.push(nextVal);
  return nextVal;
}
var start = Date.now();
var resp = fib(100);
var end = Date.now();
console.log("".concat((end - start), " time taken in MilliSeconds"));
console.log(resp);
module.exports = fib;


// iterative solution
// const fibSequence: number[] = [ 0, 1 ]
//   for (let i = 2; i <= n; i++) {
//     const val = fibSequence[i-1]
//     const previousVal = fibSequence[i-2]
//     const newVal = val+previousVal
//     fibSequence.push(newVal)
//   }
//   return fibSequence[ fibSequence.length - 1 ]
// recusive solution
// if ( n < 2 ){
//     return n
// }
// const previousVal = fib( n - 1 )
// const previousPreviousVal =  fib( n - 2 )
// const nextVal = previousPreviousVal + previousVal
// return nextVal
// recusive solution with memoization 
// if ( n < 2 ){
//     return n
// }
// const previousVal = Number.isInteger(sequence[n-1]) ? sequence[n-1]:fib( n - 1,sequence )
// const previousPreviousVal =  Number.isInteger(sequence[n-2]) ? sequence[n-2]:fib( n - 2,sequence )
// const nextVal = previousPreviousVal + previousVal
// sequence.push( nextVal )
// return nextVal
