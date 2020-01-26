# N-th Tribonacci Number

> 题目地址: [https://leetcode-cn.com/problems/n-th-tribonacci-number/](https://leetcode-cn.com/problems/n-th-tribonacci-number/)

## 题目描述

泰波那契序列 Tn 定义如下： 

$ T_{0} = 0, T_{1} = 1, T_{2} = 1 $, 且在 `n >= 0` 的条件下 $ T_{n + 3} = T_{n} + T_{n + 1} + T_{n + 2} $

给你整数 `n`，请返回第 `n` 个泰波那契数 $ T_{n} $ 的值。

示例 1：

```
输入：n = 4
输出：4
解释：
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4
```

示例 2：

```
输入：n = 25
输出：1389537
```

提示：

* `0 <= n <= 37`
* 答案保证是一个 32 位整数，即 `answer <= 2^31 - 1`。

------

## 题解

### 动态规划

已知递推公式：$ T_{n + 3} = T_{n} + T_{n + 1} + T_{n + 2} $

设 $ a = n + 3 $，那么则有 $ T_{n} = T_{a} $，又因为：

```
n + 3 = a               ... 两边同时减 3
n + 3 - 3 = a - 3
n = a - 3
# 即 T_{n} = T_{a - 3}

n + 3 = a               ... 两边同时减 2
n + 3 - 2 = a - 2
n + 1 = a - 2
# 即 T_{n + 1} = T_{a - 2}

n + 3 = a               ... 两边同时减 1
n + 3 - 1 = a - 1
n + 2 = a - 1
# 即 T_{n + 2} = T_{a - 1}
```

综上，可得 $ T_{a} $ 的递推公式：

$$
T_{a} = T_{a - 3} + T_{a - 2} + T_{a - 1}
$$

$ T_{a} $ 的递推公式就是动态规划的转移方程。

#### 代码实现

```js
function tribonacci(n) {
  const f = [0, 1, 1];

  for (let a = 3; a <= n; a++) {
    f[a] = f[a - 3] + f[a - 2] + f[a - 1];
  }

  return f[n];
}
```

#### 复杂度分析

* 时间复杂度：$ O(n) $.
* 空间复杂度：$ O(n) $.
