// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

import { Queue } from "./Queue"
import { Stack } from "./Stack"

export class Node<T> {
  constructor( public data: T, public children: Node<T>[] = [] ) { }

  add ( data: T )
  {
    const newNode = new Node( data )
    this.children.push( newNode )
  }

  remove ( data: T )
  {
    this.children = this.children.filter( ( node ) => node.data !== data )
  }
}

export class Tree<T>
{
  root: Node<T> | null = null

  traverseBF ( fn:(node:Node<T>) => void )
  {
   const q = new Queue<Node<T>>()
   if(!this.root) return
   q.add(this.root)
   while(!q.isEmpty()){
    const node = q.remove()!
    fn.call(this,node)
    node.children.map((node) => {
      q.add(node)
    })
   }
  }

  traverseDF ( fn:(node:Node<T>) => void )
  {
    if(!this.root) return
    const s = new Stack<Node<T>>()
    s.push(this.root)
    while(!s.isEmpty()){
      const node = s.pop()!
      fn.call(this,node)
      console.log(s.peek());
      if(node.children.length > 0){
        for (let i = node.children.length-1; i >= 0; i--) {
          s.push(node.children[i])
        }
      }
    }
  }
}

module.exports = { Tree, Node };
