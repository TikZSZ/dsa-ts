// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

import { Queue } from "./Queue";
import { Node } from "./Tree";

export function levelWidth ( root: Node<any> )
{
  if ( !root ) return
  const levelWidths: number[] = []
  const q = new Queue<Node<any> | string>()
  q.add( root )
  q.add( 's' )
  let counter = 0

  while ( !q.isEmpty() )
  {
    const node = q.remove()!
    if ( typeof node === 'string' ){
      levelWidths.push( counter )
      counter = 0
      if(!q.isEmpty()){
        q.add( 's' )
      }
      continue
    }
    counter++
    node.children.map( ( node ) =>
    {
      q.add( node )
    } )
  }
  return levelWidths
}
