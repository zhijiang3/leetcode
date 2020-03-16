# Compress String LCCI

> 题目地址: [https://leetcode-cn.com/problems/compress-string-lcci/](https://leetcode-cn.com/problems/compress-string-lcci/)

## 题目描述

字符串压缩。利用字符重复出现的次数，编写一种方法，实现基本的字符串压缩功能。比如，字符串 `aabcccccaaa` 会变为 `a2b1c5a3`。若“压缩”后的字符串没有变短，则返回原先的字符串。你可以假设字符串中只包含大小写英文字母（a至z）。

示例1:

```
 输入："aabcccccaaa"
 输出："a2b1c5a3"
```

示例2:

```
 输入："abbccd"
 输出："abbccd"
 解释："abbccd"压缩后为"a1b2c2d1"，比原字符串长度更长。
```

提示：

* 字符串长度在 `[0, 50000]` 范围内。

------

## 题解

### 代码实现

```js
function compressString(S) {
  let ans = "";

  let char, count;
  for (let c of S) {
    if (char !== c) {
      if (count) ans += `${char}${count}`;

      char = c;
      count = 1;
    } else {
      count++;
    }
  }
  if (count) ans += `${char}${count}`;

  return ans.length >= S.length ? S : ans;
}
```

### 复杂度分析

* 时间复杂度：$ O(n) $.
* 空间复杂度：$ O(n) $. 算上结果字符串
