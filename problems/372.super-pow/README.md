# Super Pow

> 题目地址: [https://leetcode-cn.com/problems/super-pow/](https://leetcode-cn.com/problems/super-pow/)

## 题目描述

你的任务是计算 $a^b$ 对 `1337` 取模，`a` 是一个正整数，`b` 是一个非常大的正整数且会以数组形式给出。

示例 1:

```
输入: a = 2, b = [3]
输出: 8
```

示例 2:

```
输入: a = 2, b = [1,0]
输出: 1024
```

------

## 题解

解题思路：降幂后再取模。

降幂可以通过[欧拉定理](https://zh.wikipedia.org/wiki/%E6%AC%A7%E6%8B%89%E5%AE%9A%E7%90%86_(%E6%95%B0%E8%AE%BA))的扩展实现，公式如下：

$$
a^b \equiv a^{b \mod \varphi (c) + \varphi (c)} {\pmod c}
$$

其中$ a \equiv b {\pmod c}$ 是指 `a` 与 `b` 模 `c` 同余。$ \varphi(c) $ 是[欧拉函数](https://zh.wikipedia.org/wiki/%E6%AC%A7%E6%8B%89%E5%87%BD%E6%95%B0)，指的是小于或等于 `c` 的正整数中与 `c` 互质的数的数目。举个例子：

$$
\varphi (8) = 4
$$

因为 `1,3,5,7` 均和 `8` 互质，所以和 `8` 互质的数量有 `4` 个。

*互质：在数论中，如果两个或两个以上的整数的最大公约数是 1，则称它们为互质。*

欧拉函数的计算公式如下：

$$
\varphi (n) = n \prod_{{p|n}}\left(1-{\frac {1}{p}}\right)
$$

其中 `p` 为 `x` 的所有质因数，在本题中，余数固定是 `1337`，所以我们用欧拉函数得到与 `1337` 互质数的数量：

$$
\varphi (1337) = 1337 \times (1 - \frac {1}{7}) \times (1 - \frac {1}{191}) = 1140
$$

故用 `1140` 替代 $ \varphi (1337) $ 即可。

### 代码实现

```js
function quickPow(x, n, m) {
  let ans = 1;

  while (n) {
    if ((n & 1) === 1) {
      ans = ans * x % m;
    }

    x = x * x % m;
    n = n >> 1;
  }

  return ans;
}

function superPow(a, b) {
  const c = 1140;

  let pow = 0;
  for (let i = 0; i < b.length; i++) {
    pow = (10 * pow + b[i]) % c;
  }

  pow += c;

  return quickPow(a % 1337, pow, 1337);
}
```

### 复杂度分析

* 时间复杂度：$ O(n \log n) $.
* 空间复杂度：$ O(1) $.
