const Heap = require('./index');

describe('Min Heap', () => {
  it('should add elements to the min heap and maintain the min-heap property', () => {
    const heap = new Heap.MinHeap();

    heap.add(3, 10);
    expect(heap.heap).toEqual([{ order: 3, value: 10 }]);

    heap.add(1, 20);
    expect(heap.heap).toEqual([
      { order: 3, value: 10 },
      { order: 1, value: 20 },
    ]);

    heap.add(2, 30);
    expect(heap.heap).toEqual([
      { order: 3, value: 10 },
      { order: 1, value: 20 },
      { order: 2, value: 30 },
    ]);

    heap.add(4, 5);
    expect(heap.heap).toEqual([
      { order: 4, value: 5 },
      { order: 1, value: 20 },
      { order: 2, value: 30 },
      { order: 3, value: 10 },
    ]);

    // Ensure min-heap property
    expect(heap.getLeftChild(0)?.order).toBeGreaterThanOrEqual(heap.heap[0].order);
    expect(heap.getRightChild(0)?.order).toBeGreaterThanOrEqual(heap.heap[0].order);
  });

  it('should remove the top element from the min heap and maintain the min-heap property', () => {
    const heap = new Heap.MinHeap();


    heap.add(3, 10);
    heap.add(1, 20);
    heap.add(2, 30);
    heap.add(4, 5);

    const removed = heap.remove();
    expect(removed).toEqual({ order: 4, value: 5 });

    expect(heap.heap).toEqual([
      { order: 3, value: 10 },
      { order: 1, value: 20 },
      { order: 2, value: 30 },
    ]);

    // Ensure min-heap property
    expect(heap.getLeftChild(0)?.order).toBeGreaterThanOrEqual(heap.heap[0].order);
    expect(heap.getRightChild(0)?.order).toBeGreaterThanOrEqual(heap.heap[0].order);
  });
});
