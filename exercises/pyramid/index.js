// --- Directions
// Write a function that accepts a positive number N.
// The function should print a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #  '
//       '  ###  '  
//       ' ##### '  M - i <= j && M + i >= j              
//       '#######'    3-2 <= j && 3+2 >= j
//                      1 <= j && 5 >= j                 
function pyramid(n, row, stair) {
    if (row === void 0) { row = 0; }
    if (stair === void 0) { stair = ""; }
    if (row === n) {
        return;
    }
    if (stair.length === 2 * n - 1) {
        console.log(stair);
        return pyramid(n, row + 1);
    }
    var midPoint = Math.floor((2 * n - 1) / 2);
    if (midPoint - row <= stair.length && midPoint + row >= stair.length) {
        stair += "#";
    }
    else {
        stair += " ";
    }
    pyramid(n, row, stair);
}
pyramid(4);

// function pyramid(n:number) {
//   const totalNumberOfColumns = 2*n - 1 
//   const midPoint = Math.floor(totalNumberOfColumns/2)
//   for (let i = 0; i < n; i++) {
//     let stair:string=""
//     for (let j = 0; j < totalNumberOfColumns; j++) {
//       //console.log({j:`${j}#`,totalNumberOfColumns,validColumnsNeeded,validPosition});
//       if( midPoint - i <= j && midPoint + i >= j) {
//         stair += "#"
//       }
//       else{
//         stair += " "
//       }
//     }
//     console.log(stair);
//   }
// }
// function pyramid(n:number) {
//   const totalNumberOfColumns = 2*n - 1 
//   for (let i = 1; i < n+1; i++) {
//     let stair:string=""
//     let validColumnsNeeded = 2*i - 1 
//     let validPosition = (totalNumberOfColumns - validColumnsNeeded)/2
//     let totalValidPositions = validPosition+validColumnsNeeded-1
//     for (let j = 0; j < totalNumberOfColumns; j++) {
//       //console.log({j:`${j}#`,totalNumberOfColumns,validColumnsNeeded,validPosition});
//       if(j < validPosition || j > totalValidPositions ) {
//         stair += " "
//       }
//       else{
//         stair += "#"
//       }
//     }
//     console.log(stair);
//   }
// }
module.exports = pyramid;
