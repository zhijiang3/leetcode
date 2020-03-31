# Sort an Array

> 题目地址: [https://leetcode-cn.com/problems/sort-an-array/](https://leetcode-cn.com/problems/sort-an-array/)

## 题目描述

给你一个整数数组 `nums`，请你将该数组升序排列。

示例 1：

```
输入：nums = [5,2,3,1]
输出：[1,2,3,5]
```

示例 2：

```
输入：nums = [5,1,1,2,0,0]
输出：[0,0,1,1,2,5]
```

**提示：**

* `1 <= nums.length <= 50000`
* `-50000 <= nums[i] <= 50000`

------

## 题解

### 快速排序

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
 * @param {number[]} nums
 * @param {number} start
 * @param {number} end
 */
function partition(nums, start, end) {
  const pivot = nums[end];

  let left = start - 1;
  for (let i = start; i < end; ++i) {
    if (pivot >= nums[i]) {
      left = left + 1;
      swap(nums, left, i);
    }
  }

  swap(nums, left + 1, end);

  return left + 1;
}

/**
 * @param {number[]} nums
 * @param {number} start
 * @param {number} end
 */
function quickSort(nums, start, end) {
  if (start < end) {
    const mid = partition(nums, start, end);
    quickSort(nums, start, mid - 1);
    quickSort(nums, mid + 1, end);
  }
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArray(nums) {
  quickSort(nums, 0, nums.length - 1);

  return nums;
}
```

#### 复杂度分析

* 时间复杂度：$ O(n \log n) $.
* 空间复杂度：$ O(1) $.
