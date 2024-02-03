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

class Node{
  height:number;
  constructor(public data:number,public left:Node|null = null,public right:Node|null = null){}
}

class AVL {
  root:Node|null = null
  constructor(data?:number)
  {
    if(data){
      this.root = new Node(data)
    }
  }

  height(node:Node|null):number{
    if(!node){
      return -1
    }
    return node.height
  }

  insert ( data: number )
  {
    if(!this.root) this.root = new Node(data)
    let currentNode: Node = this.root
    let path = [currentNode]
    while (true) {
      if (data > currentNode.data) {
        if (currentNode.right !== null) {
          currentNode = currentNode.right;
          path.push(currentNode)
        } else {
          this.insertNode(path,"right",data)
          break;
        }
      } else if (data < currentNode.data) {
        if (currentNode.left !== null) {
          currentNode = currentNode.left;
          path.push(currentNode)
        } else {
          this.insertNode(path,"left",data)
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

  private insertNode(nodes:Node[],pos:"left"|"right",data:number){
    nodes[nodes.length-1][pos] = new Node(data)
    nodes.forEach((node) =>{
      node.height = Math.max(this.height(node.left),this.height(node.right)+1)
    })
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
}

export const AVLTree = AVL