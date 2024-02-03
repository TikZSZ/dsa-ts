import {LinkedList} from "./LinkedList"

export class Stack<T>{
  stack:LinkedList<T> = new LinkedList()
  constructor(){}
  push(data:T){
    this.stack.insertFirst(data)
  }
  pop():T|undefined{
    if(this.isEmpty()){
      console.log("stack is empty");
      return
    }
    const firstNode = this.stack.getFirst()
    this.stack.removeFirst()
    return firstNode!.data
  }
  peek(){
    if(this.isEmpty()){
      return null
    }else {
      return this.stack.getFirst()!.data
    }
  }

  size():number{
    return this.stack.size()
  }
  isEmpty():boolean{
    return this.stack.size() < 1
  }
}
