// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node
{
  height: number = 0;
  constructor( public data: number, public left: Node | null = null, public right: Node | null = null ) { }
}

class AVL
{
  root: Node | null = null
  constructor( data?: number )
  {
    if ( data )
    {
      this.root = new Node( data )
    }
  }

  height ( node: Node | null ): number
  {
    if ( !node )
    {
      return -1
    }
    return node.height
  }

  insert ( data: number )
  {
    if ( !this.root ) this.root = new Node( data )
    let currentNode: Node = this.root
    let path = [ currentNode ]
    while ( true )
    {
      if ( data > currentNode.data )
      {
        if ( currentNode.right !== null )
        {
          currentNode = currentNode.right;
          path.push( currentNode )
        } else
        {
          this.insertNode( path, "right", data )
          break;
        }
      } else if ( data < currentNode.data )
      {
        if ( currentNode.left !== null )
        {
          currentNode = currentNode.left;
          path.push( currentNode )
        } else
        {
          this.insertNode( path, "left", data )
          break;
        }
      } else
      {
        // Handle the case where data is equal to currentNode.data
        // You can choose to ignore, update, or handle it in a specific way
        // For example, you might choose not to insert duplicates.
        break;
      }
    }
  }

  private insertNode ( nodes: Node[], pos: "left" | "right", data: number )
  {
    nodes = nodes.reverse()
    let node = nodes[ 0 ]
    node[ pos ] = new Node( data )
    for ( let i = 0; i < nodes.length; i++ ){
      node.height = Math.max( this.height( node.left ), this.height( node.right ) ) + 1
      if ( this.height( node.left ) - this.height( node.right ) > 1 )
      {
        // left heavy
        if ( this.height( node.left!.left ) - this.height( node.left!.right ) > 0 )
        {
          // left left case
          return this.rightRotate( node );
        }
        if ( this.height( node.left!.left ) - this.height( node.left!.right ) < 0 )
        {
          // left right case
          node.left = this.leftRotate( node.left! );
          return this.rightRotate( node );
        }
      }

      if ( this.height( node.left ) - this.height( node.right ) < -1 )
      {
        // right heavy
        if ( this.height( node.right!.left ) - this.height( node.right!.right ) < 0 )
        {
          // right right case
          return this.leftRotate( node );
        }
        if ( this.height( node.right!.left ) - this.height( node.right!.right ) > 0 )
        {
          // left right case
          node.right = this.rightRotate( node.right! );
          return this.leftRotate( node );
        }
      }
      node = nodes[ i + 1 ]
    }
  }

  public rightRotate(p:Node):Node {
    const c:Node = p.left!;
    const t:Node = c.right!;

    c.right = p;
    p.left = t;
    
    p.height = Math.max(this.height(p.left), this.height(p.right))+1;
    c.height = Math.max(this.height(c.left), this.height(c.right))+1;

    return c;
  }

  public leftRotate(c:Node):Node {
    const p:Node = c.right!;
    const t:Node = p.left!;

    p.left = c;
    c.right = t;
    
    p.height = Math.max(this.height(p.left), this.height(p.right))+1;
    c.height = Math.max(this.height(c.left), this.height(c.right))+1;

    return p;
  }

  contains ( data: number ): Node | null
  {
    let currentNode: Node | null = this.root

    while ( currentNode && currentNode.data !== data )
    {
      if ( currentNode.data > data )
      {
        currentNode = currentNode.left;
      }
      if ( currentNode!.data < data )
      {
        currentNode = currentNode!.right;
      }
    }
    return currentNode
  }

  display ( node?: Node | null, details?: string )
  {
    if ( !node && !details )
    {
      this.display( this.root, "Root Node: " );
    }
    if ( node == null )
    {
      return;
    }
    console.log( details! + node.data );
    this.display( node.left, "Left child of " + node.data + " : " );
    this.display( node.right, "Right child of " + node.data + " : " );
  }
}

export const AVLTree = AVL

const avlTree = new AVLTree()

for ( let i = 0; i < 1000; i++ )
{
  avlTree.insert( i )
}

console.log(avlTree.root?.height);
