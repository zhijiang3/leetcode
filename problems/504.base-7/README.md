# Base 7

> 题目地址: [https://leetcode-cn.com/problems/base-7/](https://leetcode-cn.com/problems/base-7/)

## 题目描述

给定一个整数，将其转化为7进制，并以字符串形式输出。

示例 1:

```
输入: 100
输出: "202"
```

示例 2:

```
输入: -7
输出: "-10"
```

注意: 输入范围是 `[-1e7, 1e7]`。

------

## 题解

对整数 `n` 不断的模 `7`，余数从下往上排列就是整数 `n` 的七进制表示。

### 代码实现

```js
function convertToBase7(num) {
  let str = "";

  const flag = num < 0;
  if (flag) {
    num = -num;
  }

  do {
    str = num % 7 + str;

    num = (num / 7) | 0;
  } while (num);

  return flag ? `-${str}` : str;
}
```

### 复杂度分析

* 时间复杂度：$ O(\log n) $.
* 空间复杂度：$ O(1) $.
