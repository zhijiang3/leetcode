# Perfect Number

> 题目地址: [https://leetcode-cn.com/problems/perfect-number/](https://leetcode-cn.com/problems/perfect-number/)

## 题目描述

对于一个**正整数**，如果它和除了它自身以外的所有正因子之和相等，我们称它为“完美数”。

给定一个**整数** `n`， 如果他是完美数，返回 `True`，否则返回 `False`

示例：

```
输入: 28
输出: True
解释: 28 = 1 + 2 + 4 + 7 + 14
```

提示：

* 输入的数字 `n` 不会超过 `100,000,000(1e8)`

------

## 题解

### 欧拉定理

> 引用自 [LeetCode 官方题解](https://leetcode-cn.com/problems/perfect-number/solution/wan-mei-shu-by-leetcode/)

欧几里得-欧拉定理告诉我们，每个偶完全数都可以写成 $2^{p-1}(2^p-1)$ 的形式，其中 $p$ 为素数。例如前四个完全数可以写成如下形式：

```
6 = 2^1 * (2^2 - 1)
28 = 2^2 * (2^3 - 1)
496 = 2^3 * (2^4 - 1)
8128 = 2^4 * (2^5 - 1)
```

由于目前奇完全数还未被发现，因此所有的完全数都可以写成上述形式。当 `n` 不超过 `10^8` 时，`p` 也不会很大，因此我们只要带入最小的若干个素数 `2, 3, 5, 7, 13, 17, 19, 31`，将不超过 `10^8` 的所有完全数计算出来即可。

#### 代码实现

```js
function checkPerfectNumber(num) {
  const primes = [2, 3, 5, 7, 13, 17, 19, 31];

  for (let prime of primes) {
    if ((1 << (prime - 1)) * ((1 << prime) - 1) === num) return true;
  }

  return false;
}
```

#### 复杂度分析

* 时间复杂度：$ O(1) $.
* 空间复杂度：$ O(1) $.
