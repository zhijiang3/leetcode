# Implement strStr()

> 题目地址: [https://leetcode-cn.com/problems/implement-strstr](https://leetcode-cn.com/problems/implement-strstr)

## 题目描述

实现 `strStr()` 函数。

给定一个 `haystack` 字符串和一个 `needle` 字符串，在 `haystack` 字符串中找出 `needle` 字符串出现的第一个位置 (从 0 开始)。如果不存在，则返回 `-1`。

示例 1:

```
输入: haystack = "hello", needle = "ll"
输出: 2
```

示例 2:

```
输入: haystack = "aaaaa", needle = "bba"
输出: -1
```

说明:

当 `needle` 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。

对于本题而言，当 `needle` 是空字符串时我们应当返回 `0` 。这与 C 语言的 `strstr()` 以及 Java 的 `indexOf()` 定义相符。

------

## 题解

### KMP算法

#### 代码实现

```js
function strStr(haystack, needle) {
  const next = [-1];
  let nj = 0;
  let k = -1;
  while (nj < needle.length) {
    if (k === -1 || needle[nj] === needle[k]) {
      if (needle[++nj] === needle[++k]) {
        next[nj] = next[k];
      } else {
        next[nj] = k;
      }
    } else {
      k = next[k];
    }
  }

  let i = 0;
  let j = 0;
  while (i < haystack.length && j < needle.length) {
    if (j === -1 || haystack[i] === needle[j]) {
      i++;
      j++;
    } else {
      j = next[j];
    }
  }

  if (j === needle.length) {
    return i - j;
  } else {
    return -1;
  }
}
```

#### 复杂度分析

* 时间复杂度：$ O(n) $.
* 空间复杂度：$ O(n) $.
