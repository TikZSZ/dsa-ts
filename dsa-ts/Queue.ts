import {LinkedList} from "./LinkedList"

export class Queue<T>{
  queue:LinkedList<T> = new LinkedList()
  constructor(){}
  add(data:T){
    this.queue.insertLast(data)
  }
  remove():T|undefined{
    if(this.isEmpty()){
      console.log("queue is empty");
      return
    }
    const firstNode = this.queue.getFirst()
    this.queue.removeFirst()
    return firstNode!.data
  }
  peek(){
    if(this.isEmpty()){
      return null
    }else {
      return this.queue.getFirst()!.data
    }
  }

  size():number{
    return this.queue.size()
  }
  
  isEmpty():boolean{
    return this.queue.size() < 1
  }
}
