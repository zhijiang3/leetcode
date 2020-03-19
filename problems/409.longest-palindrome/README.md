# Longest Palindrome

> 题目地址: [https://leetcode-cn.com/problems/longest-palindrome/](https://leetcode-cn.com/problems/longest-palindrome/)

## 题目描述

给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。

在构造过程中，请注意区分大小写。比如 `"Aa"` 不能当做一个回文字符串。

**注意:**

假设字符串的长度不会超过 `1010`。

示例 1:

```
输入:
"abccccdd"

输出:
7

解释:
我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。
```

------

## 题解

题目问的是构造回文的长度，所以我们不需要真正的去组一个回文，只需要利用字母出现的次数模 2 就可以知道该字母能不能组成回文的一部分：

1. 字母出现的次数模 2 正好为 0，那么该字母出现的所有次数，都可以参与到回文的组合中
2. 字母的出现次数模 2 为 1，那么取该字母能被 2 整除的部分，参与到回文的组合中

注意：如果回文的总长度是奇数，那么回文的中间的字母是单独的一个字母。

### 代码实现

```js
function longestPalindrome(s) {
  const count = {};

  for (let c of s) {
    count[c] || (count[c] = 0);
    count[c]++;
  }

  let ans = 0;
  for (let c in count) {
    ans += count[c] - count[c] % 2;
    if (count[c] % 2 === 1 && ans % 2 === 0)
      ans++;
  }

  return ans;
}
```

### 复杂度分析

* 时间复杂度：$ O(n) $.
* 空间复杂度：$ O(n) $. 
