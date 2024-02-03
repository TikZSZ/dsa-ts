"use strict";
// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
exports.__esModule = true;
function chunk(array, size) {
    var resultArray = [];
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var element = array_1[_i];
        var last = resultArray[resultArray.length - 1];
        if (!last || last.length === size) {
            resultArray.push([element]);
        }
        else if (last.length < size) {
            last.push(element);
        }
    }
  return resultArray

}
module.exports= chunk;
// const resultArray: number[][] = []
//   let tempArr: number[] = []
//   for ( let i = 0; i < array.length; i++ )
//   {
//     if(tempArr.length === size) {
//       resultArray.push(tempArr)
//       tempArr = []
//     }
//     tempArr.push(array[i])
//   }
//   if ( tempArr.length != 0 ) resultArray.push( tempArr )
//   return resultArray
// console.log( `${i}#`, count, tempArr );
//     if ( count < size && count + 1 == size )
//     {
//       tempArr.push( array[ i ] )
//       resultArray.push( tempArr )
//       tempArr = []
//       count = 0
//     } else
//     {
//       tempArr.push( array[ i ] )
//       count++
//     }
