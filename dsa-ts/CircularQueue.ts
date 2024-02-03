export class Queue<T> {
  queue:T[]|undefined[]
  insertPos:number
  removePos:number
  constructor(private size:number  = 10){
    this.queue = new Array(this.size).fill(undefined)
    this.insertPos = 0
    this.removePos = 0
  }

  add(el:T):void{
    if(this.queue[this.insertPos] !== undefined){
      console.log("queue full");
      return
    }else{
      this.queue[this.insertPos] = el
      this.insertPos = (this.insertPos+1)%this.size
    }
  }

  remove():T|undefined{
    if(this.queue[this.removePos] !== undefined){
      const el = this.queue[this.removePos]
      this.queue[this.removePos] = undefined
      this.removePos = (this.removePos+1)%this.size
      return el
    }else{
      console.log("queue empty");
      return
    }
  }

  peek(){
    return this.queue[this.removePos]
  }
}
