// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'


// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;





import {Queue} from "./CircularQueue"

export function weave(sourceOne:Queue<any>, sourceTwo:Queue<any>) {
  let status = true
  const newQueue = new Queue(8)
  while(status){
    const el1 = sourceOne.remove()
    el1 !== undefined? newQueue.add(el1) : status = false

    const el2 = sourceTwo.remove()
    el2 !== undefined? newQueue.add(el2) : status= false
  }
  return newQueue.queue
}


const one = new Queue();
one.add(1);
one.add(2);
one.add(3);
one.add(4);
const two = new Queue();
two.add('one');
two.add('two');
two.add('three');
two.add('four');

const result = weave(one, two);
console.log(result);



