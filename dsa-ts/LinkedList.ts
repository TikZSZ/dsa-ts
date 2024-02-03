// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

export class Node<T> {
  constructor( public data: T, public next: Node<T> | null ) { }
}

export class LinkedList<T> {
  index: number = 0
  head: Node<T> | null = null
  tail: Node<T> | null = null
  count: number = 0
  insertFirst ( data: T )
  {
    if ( !this.head || !this.tail )
    {
      const firstNode = new Node( data, null )
      this.head = firstNode
      this.tail = firstNode
    } else
    {
      this.head = new Node( data, this.head )
    }
    this.count++
  }

  insertLast ( data: T )
  {
    if ( !this.head || !this.tail )
    {
      const firstNode = new Node( data, null )
      this.head = firstNode
      this.tail = firstNode
    } else
    {
      const currentLastNode = this.getLast()
      const newLastNode = new Node( data, null )
      currentLastNode!.next = newLastNode
      this.tail = newLastNode
    }
    this.count++
  }

  insertAt ( data: T, index: number )
  {
    if ( index === 0 )
    {
      return this.insertFirst( data )
    } else if ( index + 1 < this.count )
    {
      let currentNode = this.head
      for ( let i = 0; i < index - 1; i++ )
      {
        currentNode = currentNode!.next!
      }
      const newNode = new Node( data, currentNode!.next )
      currentNode!.next = newNode
      this.count++
      return newNode
    } else
    {
      return this.insertLast( data )
    }
  }

  getFirst ()
  {
    return this.head
  }

  getLast ()
  {
    return this.tail
  }

  getAt ( index: number )
  {
    if ( !this.head ) return null
    if ( index >= this.count )
    {
      console.log( "GetAt failed: index out of range" );
      return null
    }
    let currentNode: Node<T> | null = this.head
    for ( let i = 0; i < index; i++ )
    {
      currentNode = currentNode!.next
    }
    return currentNode
  }

  removeFirst ()
  {
    if ( !this.head ) return
    const secondNode = this.head.next!
    this.head = secondNode
    this.count--
    return secondNode
  }

  removeLast ()
  {
    if ( !this.head ) return
    let previousNode: Node<T> | null = null
    let currentNode = this.head
    while ( true )
    {
      if ( currentNode!.next === null && previousNode === null )
      {
        this.head = null
        this.tail = null
        break
      } else if ( currentNode!.next === null )
      {
        previousNode!.next = null
        this.tail = previousNode
        break
      }
      previousNode = currentNode as Node<T>
      currentNode = currentNode!.next!
    }
    this.count--
    return currentNode
  }

  removeAt ( index: number )
  {
    if ( !this.head ) return null
    if ( index >= this.count )
    {
      console.log( "RemoveAt failed: index out of range" );
      return null
    }
    if ( index === 0 )
    {
      return this.removeFirst()
    } else if ( index + 1 < this.count )
    {
      let currentNode = this.head
      for ( let i = 0; i < index - 1; i++ )
      {
        currentNode = currentNode.next!
      }
      currentNode.next = currentNode.next!.next
      this.count--
      return currentNode
    } else
    {
      return this.removeLast()
    }
  }

  size ()
  {
    return this.count
  }


  clear ()
  {
    if ( !this.head ) return
    this.head = null
    this.count = 0
  }

  forEach ( fn: ( node: Node<T> ) => void )
  {
    if ( !this.head ) throw new Error( "List Empty" )
    let currentNode = this.head
    while ( true )
    {
      fn.call( this, currentNode )
      if ( currentNode?.next === null )
      {
        break
      }
      currentNode = currentNode.next
    }
  }

  *[ Symbol.iterator ] ()
  {
    let node = this.head
    while ( node )
    {
      yield node
      node = node.next
    }
  }
}

