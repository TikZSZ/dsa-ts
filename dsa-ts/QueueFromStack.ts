// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

class Stack<T> {
  stack: T[]
  count: number = 0
  constructor( public size: number = 10 )
  {
    this.stack = new Array( this.size ).fill( 0 )
  }

  push ( el: T ): T | undefined
  {
    if ( this.count === this.size )
    {
      console.log( "stack full" );
      return undefined
    }
    this.stack[ this.count ] = el
    this.count++
    return el
  }

  pop (): T | undefined
  {
    if ( this.count === -1 )
    {
      console.log( "stack empty" );
      return undefined
    }
    const el = this.stack[ this.count - 1 ]
    this.count--
    return el
  }

  peek (): T
  {
    return this.stack[ this.count - 1 ]
  }
}



export class Queue<T> {
  stack1: Stack<T>
  stack2: Stack<T>
  constructor( private size: number = 4 )
  {
    this.stack1 = new Stack( this.size )
    this.stack2 = new Stack( this.size )
  }

  add ( el: T ): T | undefined
  {
    return this.stack1.push( el )
  }

  remove (): T | undefined
  {
    this.fillOtherStack()
    return this.stack2.pop()
  }

  private fillOtherStack ()
  {
    if(!(this.stack1.peek() && this.stack2.size - this.stack2.count)) return
    const totalNumberOfValidIters = this.stack2.size - this.stack2.count
    for ( let i = 0; i < totalNumberOfValidIters; i++ )
    {
      const el = this.stack1.pop()
      if ( el )
      {
        this.stack2.push( el )
      }else{
        break
      }
    }
  }

  peek (): T | undefined
  {
    this.fillOtherStack()
    return this.stack2.peek()
  }
}


