# 字符串相乘

> 题目地址: [https://leetcode-cn.com/problems/multiply-strings/](https://leetcode-cn.com/problems/multiply-strings/)

## 题目描述

给定两个以字符串形式表示的非负整数 `num1` 和 `num2`，返回 `num1` 和 `num2` 的乘积，它们的乘积也表示为字符串形式。

示例 1:

```
输入: num1 = "2", num2 = "3"
输出: "6"
```

示例 2:

```
输入: num1 = "123", num2 = "456"
输出: "56088"
```

说明：

- `num1` 和 `num2` 的长度小于110。
- `num1` 和 `num2` 只包含数字 `0-9`。
- `num1` 和 `num2` 均不以零开头，除非是数字 0 本身。
- **不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。**

------

## 题解

### 代码实现

```js
function multiply(num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";

  let len1 = num1.length, len2 = num2.length;
  let ans = new Array(len1 + len2).fill(0);

  for (let i = len1 - 1; i >= 0; --i) {
    for (let j = len2 - 1; j >= 0; --j) {
      const sum = num1[i] * num2[j] + ans[i + j + 1];

      ans[i + j + 1] = sum % 10;
      ans[i + j] += Math.floor(sum / 10); // 进位相加
    }
  }
  while (ans[0] === 0) ans.shift();

  return ans.join("");
}
```

### 复杂度分析

* 时间复杂度：$ O(nm) $.
* 空间复杂度：$ O(nm) $.
