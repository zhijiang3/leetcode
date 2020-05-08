# 计数质数

> 题目地址: [https://leetcode-cn.com/problems/count-primes/](https://leetcode-cn.com/problems/count-primes/)

## 题目描述

统计所有小于非负整数 n 的质数的数量。

示例:

```
输入: 10
输出: 4
解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
```

------

## 题解

使用[埃拉托斯特尼筛法](https://zh.wikipedia.org/wiki/%E5%9F%83%E6%8B%89%E6%89%98%E6%96%AF%E7%89%B9%E5%B0%BC%E7%AD%9B%E6%B3%95)

### 代码实现

```js
function countPrimes(n) {
  const isPrime = new Array(n).fill(true);

  for (let i = 2; i * i < n; ++i) {
    if (!isPrime[i]) continue;

    for (let j = i * i; j < n; j += i)
      isPrime[j] = false;
  }

  let count = 0;
  for (let i = 2; i < n; ++i)
    if (isPrime[i]) count++;

  return count;
}
```

### 复杂度分析

* 时间复杂度：$ O(n \log \log n) $.
* 空间复杂度：$ O(n) $.
