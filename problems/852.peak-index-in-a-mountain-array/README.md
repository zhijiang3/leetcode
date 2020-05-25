# 山脉数组的峰顶索引

> 题目地址: [https://leetcode-cn.com/problems/peak-index-in-a-mountain-array/](https://leetcode-cn.com/problems/peak-index-in-a-mountain-array/)

## 题目描述

我们把符合下列属性的数组 `A` 称作山脉：

* A.length >= 3
* 存在 `0 < i < A.length - 1` 使得 `A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]`

给定一个确定为山脉的数组，返回任何满足 `A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]` 的 `i` 的值。

示例 1：

```
输入：[0,1,0]
输出：1
```

示例 2：

```
输入：[0,2,1,0]
输出：1
```

提示：

* `3 <= A.length <= 10000`
* `0 <= A[i] <= 10^6`
* `A` 是如上定义的山脉

------

## 题解

### 代码实现

```js
function peakIndexInMountainArray(A) {
  let low = 0;
  let high = A.length;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);

    if (A[mid] < A[mid + 1])
      low = mid + 1;
    else
      high = mid;
  }

  return low;
}
```

### 复杂度分析

* 时间复杂度：$ O(\log n) $.
* 空间复杂度：$ O(1) $.
