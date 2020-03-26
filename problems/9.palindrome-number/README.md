# Palindrome Number

> 题目地址: [https://leetcode-cn.com/problems/palindrome-number/](https://leetcode-cn.com/problems/palindrome-number/)

## 题目描述

判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

示例 1:

```
输入: 121
输出: true
```

示例 2:

```
输入: -121
输出: false
解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
```

示例 3:

```
输入: 10
输出: false
解释: 从右向左读, 为 01 。因此它不是一个回文数。
```

**进阶:**

你能不将整数转为字符串来解决这个问题吗？

------

## 题解

> [https://leetcode-cn.com/problems/palindrome-number/solution/hui-wen-shu-by-leetcode/](https://leetcode-cn.com/problems/palindrome-number/solution/hui-wen-shu-by-leetcode/)

对于所以负数，其都不满足回文的定义，所以可以直接返回 false。

如果不转换成字符串，那么可以对数字进行反转，再与原数字进行比较。

这里如果整个数字都反转，可能会涉及到数字溢出的问题，通常比较回文，只需要判断一半，**所以我们将原始数字除以 10，然后给反转后的数字乘上 10，当原始数字小于反转后的数字时，就意味着我们已经处理了一半位数的数字**。

注意：对于奇数位的数字，如：12321，中间的 3 是可以忽略的。

### 代码实现

```js
function isPalindrome(x) {
  if (x <= 0) return x === 0;
  // 如果数字的最后一位是 0，为了使该数字为回文，
  // 则其第一位数字也应该是 0
  // 只有 0 满足这一属性
  if (x % 10 === 0) return false;

  let n = 0;
  while (x > n) {
    n *= 10;
    n += x % 10;
    x = Math.floor(x / 10);
  }

  // 当数字长度为奇数时，我们可以通过 n / 10 去除处于中位的数字。
  // 例如，当输入为 12321 时，在 while 循环的末尾我们可以得到 x = n = 123，
  // 由于处于中位的数字不影响回文（它总是与自己相等），所以我们可以简单地将其去除。
  return x === n || x === Math.floor(n / 10);
}
```

### 复杂度分析

* 时间复杂度：$ O(\log n) $.
* 空间复杂度：$ O(1) $.
