# Longest Common Prefix

> 题目地址: [https://leetcode-cn.com/problems/longest-common-prefix/](https://leetcode-cn.com/problems/longest-common-prefix/)

## 题目描述

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 `""`。

示例 1:

```
输入: ["flower","flow","flight"]
输出: "fl"
```

示例 2:

```
输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
```

**说明:**

所有输入只包含小写字母 `a-z` 。

------

## 题解

我们从前往后枚举字符串的每一列，先比较每个字符串相同列上的字符（即不同字符串相同下标的字符）然后再进行对下一列的比较。

### 代码实现

```js
function longestCommonPrefix(strs) {
  if (!strs.length) return "";

  let i = 0;
  outerLoop: for (i; i < strs[0].length; ++i) {
    for (let j = 1; j < strs.length; ++j) {
      if (strs[0][i] !== strs[j][i]) break outerLoop;
    }
  }

  return strs[0].slice(0, i);
}
```

### 复杂度分析

* 时间复杂度：$ O(L) $. $L$ 为每个字符串相加的总长度
* 空间复杂度：$ O(1) $.
