# Ransom Note

> 题目地址: [https://leetcode-cn.com/problems/ransom-note/](https://leetcode-cn.com/problems/ransom-note/)

## 题目描述

给定一个赎金信 `ransom` 字符串和一个杂志 `magazine` 字符串，判断第一个字符串 `ransom` 能不能由第二个字符串 `magazines` 里面的字符构成。如果可以构成，返回 `true`；否则返回 `false`。

(题目说明：为了不暴露赎金信字迹，要从杂志上搜索各个需要的字母，组成单词来表达意思。)

**注意：**

你可以假设两个字符串均只含有小写字母。

```
canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
```

------

## 题解

统计赎金信上的字母个数和杂志字母的个数，如果杂志字母的个数都能满足赎金信上的字母，则表示可以构成赎金信。

### 代码实现

```js
function canConstruct(ransomNot, magazine) {
  const map = {};

  for (let char of magazine) {
    if (!map[char]) map[char] = 0;
    map[char]++;
  }

  for (let char of ransomNote) {
    if (!map[char] || --map[char] < 0) return false;
  }

  return true;
}
```

### 复杂度分析

* 时间复杂度：$ O(n + m) $. $n$ 为 `ransomNote`的长度，$m$ 为 `magazine` 的长度
* 空间复杂度：$ O(1) $. 哈希表的键最大不会超过 `26`
