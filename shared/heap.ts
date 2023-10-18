import { swap } from './swap';

export function heapUp<T>(heap: T[], heapIndex: number) {
  while (heapIndex > 0) {
    const parentIndex = (heapIndex - 1) >> 1;

    // 大根堆
    // if (heap[heapIndex] <= heap[parentIndex]) break;

    // 小根堆
    if (heap[heapIndex] >= heap[parentIndex]) break;

    swap(heap, heapIndex, parentIndex);

    heapIndex = parentIndex;
  }
}

export function heapDown<T>(heap: T[], heapIndex: number) {
  const n = heap.length;

  let leftIndex = 2 * heapIndex + 1;
  let rightIndex = 2 * heapIndex + 2;

  while (leftIndex < n) {
    // 大根堆
    // if (rightIndex < n && heap[rightIndex] > heap[leftIndex]) {
    //   leftIndex = rightIndex;
    // }
    // if (heap[leftIndex] <= heap[heapIndex]) break;

    // 小根堆
    if (rightIndex < n && heap[rightIndex] < heap[leftIndex]) {
      leftIndex = rightIndex;
    }
    if (heap[leftIndex] >= heap[heapIndex]) break;

    swap(heap, heapIndex, leftIndex);

    heapIndex = leftIndex;

    leftIndex = 2 * leftIndex + 1;
    rightIndex = 2 * leftIndex + 2;
  }
}
