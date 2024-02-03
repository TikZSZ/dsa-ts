type HeapRecord<T> = {
  order:number,
  value:T
}

// for a given i
// parent = i/2
// child = i*2 => left and i*2+1 => right

// max-heap 
export class MaxHeap<T>{
  heap:HeapRecord<T>[] = []

  add(order:number,value:T){
    this.heap.push({order,value})
    this.heapifyUp(this.heap.length-1)
  }

  getAt(index:number){
    if(index <= this.heap.length-1){
      return this.heap[index]
    }
  }


  remove(){
    const topVal = this.heap[0]
    this.heap[0] = this.heap[this.heap.length-1]
    this.heap.pop()
    this.heapifyDown(0)
    return topVal
  }

  heapifyUp(pos:number){
    let currentPos = pos
    while(true){
      const currentRecord = this.heap[currentPos].order
      const currentParent = this.getParent(currentPos).order

      if(currentRecord > currentParent){
        this.swap(this.heap,currentPos,Math.floor(Math.max((currentPos - 1) / 2, 0)));
        currentPos = Math.floor(Math.max((currentPos - 1) / 2, 0))
      }else{
        break
      }
    }
  }

  swap(arr:any[],i:number,j:number){
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }

  heapifyDown(pos:number){
    let currentPos = pos
    while(true){
      let largest = currentPos
      let currentParent = this.heap[largest]
      let leftChild = this.getLeftChild(largest)
      let rightChild = this.getRightChild(largest)

      if(leftChild && currentParent.order < leftChild.order ){
        largest = currentPos*2+1
      }else if(rightChild && currentParent.order < rightChild.order ){
        largest = currentPos*2+2
      }

      if(largest !== currentPos){
        this.swap(this.heap,currentPos,largest)
        currentPos = largest
      }else{
        break
      }
    }
  }

  getParent(pos:number){
    return this.heap[Math.floor(Math.max((pos - 1) / 2, 0))]
  }

  getLeftChild(pos:number){
    pos = pos*2 + 1
    return this.heap[pos]
  }

  getRightChild(pos:number){
    pos = pos*2 + 2
    return this.heap[pos]
  }
}

export class MinHeap<T>{
  heap:HeapRecord<T>[] = []

  add(order:number,value:T){
    this.heap.push({order,value})
    this.heapifyUp(this.heap.length-1)
  }

  remove(){
    const topVal = this.heap[0]
    this.heap[0] = this.heap[this.heap.length-1]
    this.heap.pop()
    this.heapifyDown(0)
    return topVal
  }

  heapifyUp(pos:number){
    let currentPos = pos
    while(true){
      const currentRecord = this.heap[currentPos].order
      const currentParent = this.getParent(currentPos).order

      if(currentRecord < currentParent){
        this.swap(this.heap,currentPos,Math.floor(Math.max((currentPos - 1) / 2, 0)));
        currentPos = Math.floor(Math.max((currentPos - 1) / 2, 0))
      }else{
        break
      }
    }
  }

  swap(arr:any[],i:number,j:number){
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }

  heapifyDown(pos:number){
    let currentPos = pos
    while(true){
      let largest = currentPos
      let currentParent = this.heap[largest]
      let leftChild = this.getLeftChild(largest)
      let rightChild = this.getRightChild(largest)

      if(leftChild && currentParent.order > leftChild.order ){
        // 4 > 3
        largest = currentPos*2+1
      }
      
      if(rightChild && currentParent.order > rightChild.order ){
        largest = currentPos*2+2
      }

      if(largest !== currentPos){
        this.swap(this.heap,currentPos,largest)
        currentPos = largest
      }else{
        break
      }
    }
  }

  getParent(pos:number){
    return this.heap[Math.floor(Math.max((pos - 1) / 2, 0))]
  }

  getLeftChild(pos:number){
    pos = pos*2 + 1
    return this.heap[pos]
  }

  getRightChild(pos:number){
    pos = pos*2 + 2
    return this.heap[pos]
  }
}
