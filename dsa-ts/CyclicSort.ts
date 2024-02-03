// for sorting from range 1 -> n
export function cyclicSort(arr:number[]){
  let i = 0
  while(i < arr.length){
    const correctPosition = arr[i] - 1
    if(arr[i] !== arr[correctPosition] ){
      swap(arr,i,correctPosition)
    }else{
      i++
    }
  }
  return arr
}
/// 1 2 3 4 5 index = n-1
// index    => 0 1 2 3  arr[i] = i+1 
// arr idle => 1 2 3 4  arr[i] == i+1
function cyclicSort2(arr:number[]){
  const newArr:number[] = new Array(arr.length).fill(null)
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i]
    const index = num-1
    newArr[index] = num
  }
  return newArr
}

function swap(arr:number[],a:number,b:number){
  const temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}

console.log(cyclicSort2([5,4,2,1]));
