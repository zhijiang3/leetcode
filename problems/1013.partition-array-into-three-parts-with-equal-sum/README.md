# Partition Array Into Three Parts With Equal Sum

> 题目地址: [https://leetcode-cn.com/problems/partition-array-into-three-parts-with-equal-sum/](https://leetcode-cn.com/problems/partition-array-into-three-parts-with-equal-sum/)

## 题目描述

给你一个整数数组 `A`，只有可以将其划分为三个和相等的非空部分时才返回 `true`，否则返回 `false`。

形式上，如果可以找出索引 `i+1 < j` 且满足 `(A[0] + A[1] + ... + A[i] == A[i+1] + A[i+2] + ... + A[j-1] == A[j] + A[j-1] + ... + A[A.length - 1])` 就可以将数组三等分。

示例 1：

```
输出：[0,2,1,-6,6,-7,9,1,2,0,1]
输出：true
解释：0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
```

示例 2：

```
输入：[0,2,1,-6,6,7,9,-1,2,0,1]
输出：false
```

示例 3：

```
输入：[3,3,6,5,-2,2,5,1,-9,4]
输出：true
解释：3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4
```

**提示：**

* `3 <= A.length <= 50000`
* `-10^4 <= A[i] <= 10^4`

------

## 题解

假设数组中三部分的和相等，那么 `Sum(A) / 3` 就是这三部分的和，所以我们得到 `Sum(A) / 3` 后，再遍历 `A` 进行累加即可知道能否将数组划分成三部分和相等。

如果统计 `Sum(A) / 3` 出现的次数，那么需要注意的是，该次数可能会 `>= 3`，对于超过 `3` 的部分，我们可以忽略，原因是超出的部分，可以归并到划分的第一组或第二组或最后一组。

### 代码实现

```js
function canThreePartsEqualSum(A) {
  let sum = 0;
  for (let n of A) {
    sum += n;
  }

  if (sum % 3 !== 0) return false;

  sum = sum / 3;

  let count = 0;
  let partSum = 0;
  for (let n of A) {
    partSum += n;

    if (partSum === sum) {
      count++;
      partSum = 0;
    }
  }

  return count >= 3;
}
```

### 复杂度分析

* 时间复杂度：$ O(n) $.
* 空间复杂度：$ O(1) $.
