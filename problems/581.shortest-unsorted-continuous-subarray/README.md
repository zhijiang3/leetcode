# Shortest Unsorted Continuous Subarray

> 题目地址: [https://leetcode-cn.com/problems/shortest-unsorted-continuous-subarray/](https://leetcode-cn.com/problems/shortest-unsorted-continuous-subarray/)

## 题目描述

给定一个整数数组，你需要寻找一个**连续的子数组**，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。

你找到的子数组应是**最短**的，请输出它的长度。

示例 1:

```
输入: [2, 6, 4, 8, 10, 9, 15]
输出: 5
解释: 你只需要对 [6, 4, 8, 10, 9] 进行升序排序，那么整个表都会变为升序排序。
```

说明 :

* 输入的数组长度范围在 `[1, 10,000]`。
* 输入的数组可能包含**重复**元素 ，所以**升序**的意思是 `<=`。

------

## 题解

### 方法一：排序

对数组进行排序，排序后最低位不同的索引和最高位不同的索引组成的范围，就是最短的需要升序排序的连续子数组。

以 `[2, 6, 4, 8, 10, 9, 15]` 为例：

```
[2, 6, 4, 8, 10, 9, 15]  # 原数组
[2, 4, 6, 8, 9, 10, 15]  # 升序排序后的数组
    ↑            ↑
   min          max
```

#### 代码实现

```js
function findUnsortedSubarray(nums) {
  const sortedNums = nums.slice().sort((a, b) => a - b);

  let min = nums.length;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (sortedNums[i] !== nums[i]) {
      min = Math.min(min, i);
      max = Math.max(max, i);
    }
  }

  return max - min > 0 ? max - min + 1 : 0;
}
```

#### 复杂度分析

* 时间复杂度：$ O(n \log n) $.
* 空间复杂度：$ O(n) $.

### 方法二：使用栈

解题思路也是找出最低位移动的索引和最高位移动的索引，不过是使用栈的方式。

顺序遍历数组，在每次入栈时循环判断要入栈的数和栈顶的数大小，如果比栈顶的数小，则把栈顶弹出，直到找到一个更小的元素，以此找出最低位的索引。

最高位的索引也是类似，只是逆序遍历数组和比栈顶元素大的数出栈。

以 `[2, 6, 4, 8, 10, 9, 15]` 为例：

```
            |----|
            | 15 |
            |----|
 index-4 <- | 10 | <- 9
            |----|
            | 8  |
            |----|
 index-1 <- | 6  | <- 4
            |----|
            | 2  |
            |----|
# 顺序遍历数组，把数压入栈，得出最低位的索引是 1
------------------------------------------
            |----|
            | 2  |
            |----|
 index-2 <- | 4  | <- 6
            |----|
            | 8  |
            |----|
 index-5 <- | 9  | <- 10
            |----|
            | 15 |
            |----|
# 逆序遍历数组，把数压入栈，得出最高位的索引是 5
```

#### 代码实现

```js
function findUnsortedSubarray(nums) {
  let stack = [];

  let min = nums.length;
  for (let i = 0; i < nums.length; i++) {
    while (stack.length !== 0 && nums[stack[stack.length - 1]] > nums[i]) {
      min = Math.min(min, stack.pop());
    }
    stack.push(i);
  }

  stack = [];

  let max = 0;
  for (let j = nums.length - 1; j >= 0; j--) {
    while (stack.length !== 0 && nums[stack[stack.length - 1]] < nums[j]) {
      max = Math.max(max, stack.pop());
    }
    stack.push(j);
  }

  return max - min > 0 ? max - min + 1 : 0;
}
```

#### 复杂度分析

* 时间复杂度：$ O(n) $.
* 空间复杂度：$ O(n) $.
