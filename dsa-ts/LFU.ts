type HeapRecord<T> = {
  order: number,
  value: T
}

class MinHeap<T>{
  heap: HeapRecord<T>[] = []
  // order,index
  valuesToIndex: Map<T, number> = new Map<T, number>()

  add ( order: number, value: T )
  {
    this.heap.push( { order, value } )
    const pos = this.heap.length - 1
    this.valuesToIndex.set( value, pos )
    return this.heap[this.heapifyUp( pos ) ]
  }

  remove ( value?: T )
  {
    if ( !value )
    {
      const topVal = this.heap[ 0 ]
      this.heap[ 0 ] = this.heap[ this.heap.length - 1 ]
      this.heap.pop()
      this.heapifyDown( 0 )
      return topVal
    }
    const indexToRemove = this.valuesToIndex.get( value );

    if ( indexToRemove !== undefined )
    {
      const topVal = this.heap[ indexToRemove ]
      this.swap( this.heap,indexToRemove, this.heap.length - 1 );
      this.valuesToIndex.set(this.heap[0].value,0)
      this.heap.pop();
      this.valuesToIndex.delete( value );
      this.heapifyDown( indexToRemove );
      return topVal
    }
  }

  heapifyUp ( pos: number )
  {
    let currentPos = pos
    while ( true )
    {
      const currentRecord = this.heap[ currentPos ]
      const currentParent = this.getParent( currentPos )

      if ( currentRecord.order < currentParent.order )
      {
        this.swap( this.heap, currentPos, Math.floor( Math.max( ( currentPos - 1 ) / 2, 0 ) ) );
        this.valuesToIndex.set( currentParent.value, currentPos )
        currentPos = Math.floor( Math.max( ( currentPos - 1 ) / 2, 0 ) )
        this.valuesToIndex.set( currentRecord.value, currentPos )
      } else
      {
        break
      }
    }
    return currentPos
  }

  swap ( arr: any[], i: number, j: number )
  {
    const temp = arr[ i ]
    arr[ i ] = arr[ j ]
    arr[ j ] = temp
  }

  heapifyDown ( pos: number )
  {
    let currentPos = pos
    while ( true )
    {
      let largest = currentPos
      let currentParent = this.heap[ largest ]
      let leftChild = this.getLeftChild( largest )
      let rightChild = this.getRightChild( largest )

      if ( leftChild && currentParent.order >= leftChild.order )
      {
        // 4 > 3
        largest = currentPos * 2 + 1
        this.valuesToIndex.set( leftChild.value, currentPos )
      }

      if ( rightChild && currentParent.order >= rightChild.order )
      {
        largest = currentPos * 2 + 2
        this.valuesToIndex.set( rightChild.value, currentPos )
      }

      if ( largest !== currentPos )
      {
        this.swap( this.heap, currentPos, largest )
        currentPos = largest
        this.valuesToIndex.set( currentParent.value, currentPos )
      } else
      {
        break
      }
    }
  }

  getParent ( pos: number )
  {
    return this.heap[ Math.floor( Math.max( ( pos - 1 ) / 2, 0 ) ) ]
  }

  getLeftChild ( pos: number )
  {
    pos = pos * 2 + 1
    return this.heap[ pos ]
  }

  getRightChild ( pos: number )
  {
    pos = pos * 2 + 2
    return this.heap[ pos ]
  }
}

type CacheMap<K,V> = Map<K,{
  frequency:number
  value:V
}>

export class LFUCache<K,V>{
  cacheMap:CacheMap<K,V> = new Map()
  lfuHeap:MinHeap<K> = new MinHeap()
  noOfEntires:number = 0
  constructor(private capacity:number){}

  get(key:K){
    // get the element
    const cacheEntry  = this.cacheMap.get(key)
    if(!cacheEntry){
      return -1
    }
    // if element exists update frequency and return element
    cacheEntry.frequency++
    this.incrementLFUCount(key)
    return cacheEntry.value
  }

  set(key:K,value:V):void{
    // get element
    const cacheEntry  = this.cacheMap.get(key)
    if(!cacheEntry){
      // add new element branch
      // check if out of capcity and make space
      if(this.noOfEntires === this.capacity){
        this.removeLeastFrequentlyUsed()
      }
      this.lfuHeap.add(1,key)
      this.cacheMap.set(key,{value,frequency:1})
      this.noOfEntires++
      // initlise with frequency 1
    }else{
      // update element branch
      // update value
      this.cacheMap.set(key,{value,frequency:cacheEntry.frequency+1})
      // update frequency
      this.incrementLFUCount(key)
    }
    // if exists increase counter and replace value
    // if does not exists check if space is left and add to cache 
  }

  incrementLFUCount(key:K){
    const removedEntry = this.lfuHeap.remove(key)
    if(!removedEntry) {
      console.log("no entires for key found");
      return
    }
    const newFrequency = removedEntry.order + 1
    this.lfuHeap.add(newFrequency,key)
  }

  removeLeastFrequentlyUsed(){
    const removed = this.lfuHeap.remove()
    this.cacheMap.delete(removed?.value!)
    this.noOfEntires--
  }
}

