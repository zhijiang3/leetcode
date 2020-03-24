# 最小的 k 个数

> 题目地址: [https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/](https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/)

## 题目描述

输入整数数组 `arr`，找出其中最小的 k 个数。例如，输入 4、5、1、6、2、7、3、8 这 8 个数字，则最小的 4 个数字是 1、2、3、4。

示例 1：

```
输入：arr = [3,2,1], k = 2
输出：[1,2] 或者 [2,1]
```

示例 2：

```
输入：arr = [0,1,2,1], k = 1
输出：[0]
```

**限制：**

* `0 <= k <= arr.length <= 10000`
* `0 <= arr[i] <= 10000`

------

## 题解

### 方法一：排序

#### 代码实现

```js
/**
 * @param {number[]} arr
 * @param {number} k
 */
function getLeastNumbers(arr, k) {
  arr.sort((a, b) => a - b);

  return arr.slice(0, k);
}
```

#### 复杂度分析

* 时间复杂度：$ O(n \log n) $.
* 空间复杂度：$ O(\log n) $.

### 方法二：快速选择

快速选择以快速排序为模型，对输入的数组进行递归划分。但是与快速排序不同的是，快速排序会递归处理划分的两边，而快速选择只处理划分的一边。

#### 代码实现

```js
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
 * @param {number[]} arr
 * @param {number} l
 * @param {number} r
 */
function partition(arr, l, r) {
  const pivot = arr[r];

  let i = l - 1;
  for (let j = l; j <= r - 1; ++j) {
    if (pivot >= arr[j]) {
      i = i + 1;
      swap(arr, i, j);
    }
  }

  swap(arr, i + 1, r);

  return i + 1;
}

/**
 * @param {number[]} arr
 * @param {number} l
 * @param {number} r
 */
function randomizedPartition(arr, l, r) {
  const i = Math.floor(
    Math.random() * (r - l) + r
  );

  swap(arr, i, r);

  return partition(arr, l, r);
}

/**
 * @param {number[]} arr
 * @param {number} l
 * @param {number} r
 * @param {number} k
 */
function randomizedSelected(arr, l, r, k) {
  if (l >= r) return;

  const pos = randomizedPartition(arr, l, r);
  const num = pos - l + 1;

  if (num === k) return;
  else if (num > k) randomizedSelected(arr, l, pos - 1, k);
  else if (num < k) randomizedSelected(arr, pos + 1, r, k - num);
}

/**
 * @param {number[]} arr
 * @param {number} k
 */
function getLeastNumbers(arr, k) {
  randomizedSelected(arr, 0, arr.length - 1, k);

  return arr.slice(0, k);
}
```

#### 复杂度分析

* 时间复杂度：$ O(n) $. 期望运行时间为 $O(n)$，最坏时间复杂度为：$O(n^2)$
* 空间复杂度：$ O(\log n) $.

### 方法三：最大堆

使用最大堆维护前 k 小值。首先将前 k 个数添加到最大堆中，然后从 `k + 1` 处开始遍历数组，如果当前遍历到的数比堆顶的数要小，则替换堆顶的数，并修正最大堆。

#### 代码实现

```js
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

  let currentIndex = heap.length - 1;
  let parentIndex = Math.floor((currentIndex - 1) / 2);

  while (parentIndex >= 0 && heap[currentIndex] > heap[parentIndex]) {
    swap(heap, parentIndex, currentIndex);

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

    if (leftChildIndex < heap.length && heap[leftChildIndex] > heap[largest])
      largest = leftChildIndex;
    if (rightChildIndex < heap.length && heap[rightChildIndex] > heap[largest])
      largest = rightChildIndex;

    if (largest === currentIndex) break;

    swap(heap, currentIndex, largest);
    currentIndex = largest;
  }
}

/**
 * @param {number[]} arr
 * @param {number} k
 */
function getLeastNumbers(arr, k) {
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
```

#### 复杂度分析

* 时间复杂度：$O(n \log k)$. 其中 $n$ 是数组 `arr` 的长度。由于最大堆实时维护前 $k$ 小值，所以插入删除都是 $O(\log k)$ 的时间复杂度，最坏情况下数组里 $n$ 个数都会插入，所以一共需要 $O(n \log k)$ 的时间复杂度。
* 空间复杂度：$O(k)$. 最大堆里的数据为 $k$ 个
