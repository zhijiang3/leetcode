/**
 * @param {number[]} arr
 * @param {number} i
 * @param {number} j
 */
function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

/**
 * @param {number[]} heap
 * @param {number} num
 */
function pushToHeap(heap, num) {
  heap.push(num);

  // heapify up
  let currentIndex = heap.length - 1;
  let parentIndex = Math.floor((currentIndex - 1) / 2);

  while (parentIndex >= 0 && heap[parentIndex] < heap[currentIndex]) {
    swap(heap, currentIndex, parentIndex);

    currentIndex = parentIndex;
    parentIndex = Math.floor((currentIndex - 1) / 2);
  }
}

/**
 * @param {number[]} heap
 * @param {number} customStartIndex
 */
function maxHeapify(heap, customStartIndex = 0) {
  let currentIndex = customStartIndex;

  let largest, leftChildIndex, rightChildIndex;

  while (true) {
    largest = currentIndex;
    leftChildIndex = 2 * currentIndex + 1;
    rightChildIndex = 2 * currentIndex + 2;

    if (leftChildIndex < heap.length && heap[leftChildIndex] > heap[largest]) largest = leftChildIndex;
    if (rightChildIndex < heap.length && heap[rightChildIndex] > heap[largest]) largest = rightChildIndex;

    if (largest === currentIndex) break;

    swap(heap, currentIndex, largest);
    currentIndex = largest;
  }
}

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
export default function getLeastNumbers(arr, k) {
  const heap = [];

  for (let i = 0; i < k; ++i) {
    pushToHeap(heap, arr[i]);
  }

  for (let i = k; i < arr.length; ++i) {
    if (heap[0] > arr[i]) {
      heap[0] = arr[i];
      maxHeapify(heap);
    }
  }

  return heap;
}
