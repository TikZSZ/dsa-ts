export function insertSort<T>(arr:T[]){
  for (let i = 0; i < arr.length-1; i++) {
    for (let j = i+1; j > 0; j--) {
      if(arr[j] > arr[j-1]){
        break
      }else{
        swap(arr,j-1,j)
      }
    }
  }
  return arr
}

function swap<T>(arr:T[],a:number,b:number){
  const temp = arr[b]
  arr[b] = arr[a]
  arr[a] = temp
}

console.log(insertSort([5,2,4,1,3]));
