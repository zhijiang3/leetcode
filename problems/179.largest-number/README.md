# 最大数

> 题目地址: [https://leetcode-cn.com/problems/largest-number/](https://leetcode-cn.com/problems/largest-number/)

## 题目描述

给定一组非负整数，重新排列它们的顺序使之组成一个最大的整数。

示例 1:

```
输入: [10,2]
输出: 210
```

示例 2:

```
输入: [3,30,34,5,9]
输出: 9534330
说明: 输出结果可能非常大，所以你需要返回一个字符串而不是整数。
```

------

## 题解

### 代码实现

```js
function largestNumber(nums) {
  const ans = nums.map(String).sort((a, b) => {
    return a + b > b + a ? -1 : 1;
  });

  if (ans[0] === "0") return "0";

  return ans.join("");
}
```

### 复杂度分析

* 时间复杂度：$ O(n\log n) $.
* 空间复杂度：$ O(n) $.
