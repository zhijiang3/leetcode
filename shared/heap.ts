import { swap } from './swap';

export function heapUp<T>(heap: T[], heapIndex: number) {
  while (heapIndex > 0) {
    const parentIndex = Math.floor((heapIndex - 1) / 2);

    // 如果是大根堆，这里的条件需要调整
    if (heap[heapIndex] > heap[parentIndex]) break;

    swap(heap, heapIndex, parentIndex);

    heapIndex = parentIndex;
  }
}

export function heapDown<T>(heap: T[], heapIndex: number) {
  const n = heap.length;

  let leftIndex = 2 * heapIndex + 1;
  let rightIndex = 2 * heapIndex + 2;
  let targetIndex: number;

  while (leftIndex < n) {
    // 如果是大根堆，这里的条件需要调整
    if (rightIndex < n && heap[rightIndex] < heap[leftIndex]) {
      targetIndex = rightIndex;
    } else {
      targetIndex = leftIndex;
    }

    // 如果是大根堆，这里的条件需要调整
    if (heap[targetIndex] > heap[heapIndex]) break;

    swap(heap, heapIndex, targetIndex);

    leftIndex = 2 * targetIndex + 1;
    rightIndex = 2 * targetIndex + 2;
  }
}
