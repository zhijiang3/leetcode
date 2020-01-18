# Find N Unique Integers Sum up to Zero

> 题目地址: [https://leetcode-cn.com/problems/find-n-unique-integers-sum-up-to-zero/](https://leetcode-cn.com/problems/find-n-unique-integers-sum-up-to-zero/)

## 题目描述

给你一个整数  `n`，请你返回 **任意**  一个由 `n`  个 **各不相同**  的整数组成的数组，并且这 `n` 个数相加和为 0 。

示例 1：

```
输入：n = 5
输出：[-7,-1,1,3,4]
解释：这些数组也是正确的 [-5,-1,1,2,3]，[-3,-1,2,-2,4]。
```

示例 2：

```
输入：n = 3
输出：[-1,0,1]
```

示例 3：

```
输入：n = 1
输出：[0]
```

提示：

* `1 <= n <= 1000`

------

## 题解

对于数字 `n` 位，要使其和为 0，有很多种方法，其中一种解法可以按照如下思路进行处理：

$$
n + (-n) = 0
$$

故当 `n` 为奇数时：

$$
A = \{x|0, 1, -1, ..., x, -x\} \quad (x = \lfloor \frac{n} {2} \rfloor, x \in Z)
$$

当 `n` 为偶数时：

$$
A = \{x|1, -1, ..., x, -x\} \quad (x = \lfloor \frac{n} {2} \rfloor, x \in Z)
$$

对于 `n = 5（奇数）` 我们需要这样的数组 `[0, 1, -1, 2, -2]`。
对于 `n = 4（偶数）` 我们需要这样的数组 `[1, -1, 2, -2]`。

### 代码实现

```js
function sumZero(n) {
  const result = [];

  // check if odd
  if ((n & 1) === 1) result.push(0);

  let count = 1;
  while (result.length < n) {
    result.push(count, -count);
    count++;
  }

  return result;
}
```

### 复杂度分析

* 时间复杂度：$ O(n) $.
* 空间复杂度：$ O(n) $. 使用了一个数组保存结果。
