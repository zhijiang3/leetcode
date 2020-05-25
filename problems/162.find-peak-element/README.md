# 寻找峰值

> 题目地址: [https://leetcode-cn.com/problems/find-peak-element/](https://leetcode-cn.com/problems/find-peak-element/)

## 题目描述

峰值元素是指其值大于左右相邻值的元素。

给定一个输入数组 `nums`，其中 `nums[i] ≠ nums[i+1]`，找到峰值元素并返回其索引。

数组可能包含多个峰值，在这种情况下，返回任何一个峰值所在位置即可。

你可以假设 `nums[-1] = nums[n] = -∞`。

示例 1:

```
输入: nums = [1,2,3,1]
输出: 2
解释: 3 是峰值元素，你的函数应该返回其索引 2。
```

示例 2:

```
输入: nums = [1,2,1,3,5,6,4]
输出: 1 或 5 
解释: 你的函数可以返回索引 1，其峰值元素为 2；
     或者返回索引 5， 其峰值元素为 6。
```

说明:

你的解法应该是 O(log n) 时间复杂度的。

------

## 题解

### 代码实现

```js
function findPeakElement(nums) {
  let low = 0;
  let high = nums.length;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (nums[mid] < nums[mid - 1]) {
      high = mid;
    } else if (nums[mid] < nums[mid + 1]) {
      low = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
}
```

### 复杂度分析

* 时间复杂度：$ O(\log n) $.
* 空间复杂度：$ O(1) $.
