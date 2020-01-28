# Subtract the Product and Sum of Digits of an Integer

> 题目地址: [https://leetcode-cn.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/](https://leetcode-cn.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/)

## 题目描述

给你一个整数 n，请你帮忙计算并返回该整数「各位数字之积」与「各位数字之和」的差。

示例 1：

```
输入：n = 234
输出：15
解释：
各位数之积 = 2 * 3 * 4 = 24
各位数之和 = 2 + 3 + 4 = 9
结果 = 24 - 9 = 15
```

示例 2：

```
输入：n = 4421
输出：21
解释：
各位数之积 = 4 * 4 * 2 * 1 = 32
各位数之和 = 4 + 4 + 2 + 1 = 11
结果 = 32 - 11 = 21
```

提示：

* `1 <= n <= 10^5`

------

## 题解

对于整数 `n` 每一位上的数字，可以这么求：

个位：`n / 10^0 % 10`  
十位：`n / 10^1 % 10`  
百位：`n / 10^2 % 10`  
千位：`n / 10^3 % 10`  

由此可得，只需要不断把数字除以 10 再余 10 就可以拿到位数。

### 代码实现

```js
function subtractProductAndSum(n) {
  let sum = 0;
  let prod = 1;

  while (n) {
    let bit = n % 10;

    sum += bit;
    prod *= bit;

    n = (n / 10) | 0;
  }

  return prod - sum;
}
```

### 复杂度分析

* 时间复杂度：$ O(\log n) $.对题该题中的整数 $ n $ ，其位数为 $ \lceil \log_{10} (n + 1) \rceil $，根据[换底公式](https://zh.wikipedia.org/wiki/%E5%AF%B9%E6%95%B0%E6%81%92%E7%AD%89%E5%BC%8F#%E6%8D%A2%E5%BA%95%E5%85%AC%E5%BC%8F)，该式子以 10 为底和以 2 为底的对数只相差一个常数，所以这里可以写成 $ \log n $。
* 空间复杂度：$ O(1) $.
