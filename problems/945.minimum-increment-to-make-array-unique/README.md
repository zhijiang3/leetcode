# Minimum Increment To Make Array Unique

> 题目地址: [https://leetcode-cn.com/problems/minimum-increment-to-make-array-unique/](https://leetcode-cn.com/problems/minimum-increment-to-make-array-unique/)

## 题目描述

给定整数数组 A，每次 *move* 操作将会选择任意 `A[i]`，并将其递增 `1`。

返回使 A 中的每个值都是唯一的最少操作次数。

示例 1:

```
输入：[1,2,2]
输出：1
解释：经过一次 move 操作，数组将变为 [1, 2, 3]。
```

示例 2:

```
输入：[3,2,1,2,1,7]
输出：6
解释：经过 6 次 move 操作，数组将变为 [3, 4, 1, 2, 5, 7]。
可以看出 5 次或 5 次以下的 move 操作是不能让数组的每个值唯一的。
```

**提示：**

* `0 <= A.length <= 40000`
* `0 <= A[i] < 40000`

------

## 题解

通过对需要自增的数字进行计数，在有空的位置处通过与需要自增的数字进行相减以得到需要自增的次数。

### 代码实现

```js
function minIncrementForUnique(A) {
  const count = new Array(80000).fill(0);

  for (let n of A) count[n]++;

  let ans = 0, taken = 0;
  for (let i = 0; i < count.length; i++) {
    if (count[i] > 1) {
      taken += count[i] - 1;
      ans -= i * (count[i] - 1);
    } else if (taken > 0 && count[i] === 0) {
      taken--;
      ans += i;
    }
  }

  return ans;
}
```

### 复杂度分析

* 时间复杂度：$ O(L) $. 其中 $L$ 的数量级是数组 `A` 的长度加上其数据范围内的最大值，因为在最坏情况下，数组 `A` 中的所有数都是数据范围内的最大值。
* 空间复杂度：$ O(L) $.
