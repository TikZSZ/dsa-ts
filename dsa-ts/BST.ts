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

class Node<T>{
  constructor(public data:T,public left:Node<T>|null = null,public right:Node<T>|null = null){}
}

class BST<T = number> {
  root:Node<T>|null = null

  constructor(data?:T)
  {
    if(data){
      this.root = new Node(data)
    }
  }

  insert ( data: T )
  {
    if(!this.root) this.root = new Node(data)
    let currentNode: Node<T> = this.root
    while (true) {
      if (data > currentNode.data) {
        if (currentNode.right !== null) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = new Node(data);
          break;
        }
      } else if (data < currentNode.data) {
        if (currentNode.left !== null) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = new Node(data);
          break;
        }
      } else {
        // Handle the case where data is equal to currentNode.data
        // You can choose to ignore, update, or handle it in a specific way
        // For example, you might choose not to insert duplicates.
        break;
      }
    }
  }

  contains ( data: T ): Node<T> | null
  {
    let currentNode: Node<T> | null = this.root

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
}

export const BinaryTree = BST