# Prime Number of Set Bits in Binary Representation

> 题目地址: [https://leetcode-cn.com/problems/prime-number-of-set-bits-in-binary-representation/](https://leetcode-cn.com/problems/prime-number-of-set-bits-in-binary-representation/)

## 题目描述

给定两个整数 `L` 和 `R` ，找到闭区间 `[L, R]` 范围内，计算置位位数为质数的整数个数。

（注意，计算置位代表二进制表示中1的个数。例如 `21` 的二进制表示 `10101` 有 3 个计算置位。还有，1 不是质数。）

示例 1:

```
输入: L = 6, R = 10
输出: 4
解释:
6 -> 110 (2 个计算置位，2 是质数)
7 -> 111 (3 个计算置位，3 是质数)
9 -> 1001 (2 个计算置位，2 是质数)
10-> 1010 (2 个计算置位，2 是质数)
```

示例 2:

```
输入: L = 10, R = 15
输出: 5
解释:
10 -> 1010 (2 个计算置位, 2 是质数)
11 -> 1011 (3 个计算置位, 3 是质数)
12 -> 1100 (2 个计算置位, 2 是质数)
13 -> 1101 (3 个计算置位, 3 是质数)
14 -> 1110 (3 个计算置位, 3 是质数)
15 -> 1111 (4 个计算置位, 4 不是质数)
```

注意:

* `L`, `R` 是 `L <= R` 且在 `[1, 10^6]` 中的整数。
* `R - L` 的最大值为 `10000`。

------

## 题解

对于给出的 L 到 R 的每一个数字，其有 2 个主要操作的地方：

1. 计算一个数字的二进制位包含 1 的个数，得到 `zeroCount`
2. 判断 `zeroCount` 是否是*质数*

计算二进制位数只需要遍历数字的每一位，做 `bit & 1 === 1` 的判断即可统计出 1 的个数。

> 质数，又称素数，指在大于1的自然数中，除了1和该数自身外，无法被其他自然数整除的数。

判断 `zeroCount` 是否是质数，可以遍历 2 到 $\sqrt {zeroCount}$，只要有一个数除尽了，那么就不会是质数。

在题目中 L 或 R 最大的取值为 $10^6$，也就是 `1000000` 其二进制为：

$$
11110100001001000000
$$

**共有 20 位二进制数，这意味着在本题中质数不会超过 20**，所以我们可以得出所有可能的质数：`[2, 3, 5, 7, 11, 13, 17, 19]`。

### 代码实现

```js
function countPrimeSetBits(L, R) {
  let count = 0;

  while (L <= R) {
    let n = L;
    let zeroCount = 0;
    while (n) {
      zeroCount++;
      n = n & (n - 1);
    }

    switch (zeroCount) {
      case 2:
      case 3:
      case 5:
      case 7:
      case 11:
      case 13:
      case 17:
      case 19:
        count++;
        break;
    }

    L++;
  }

  return count;
}
```

### 复杂度分析

* 时间复杂度：$ O(nm) $. $n$ 为 `R - L`，$m$ 为 $[L,R]$ 区间内的每个数的位数
* 空间复杂度：$ O(1) $.
