# Add Binary

> 题目地址: [https://leetcode-cn.com/problems/add-binary/](https://leetcode-cn.com/problems/add-binary/)

## 题目描述

给定两个二进制字符串，返回他们的和（用二进制表示）。

输入为非空字符串且只包含数字 1 和 0。

示例 1:

```
输入: a = "11", b = "1"
输出: "100"
```

示例 2:

```
输入: a = "1010", b = "1011"
输出: "10101"
```

------

## 题解

直接对字符串逐位计算和进位即可。使用一个辅助变量 `carry` 记录是否需要进位：

* 如果字符串 `a` 的最低位是 1，则将 1 加到进位 `carry` 中
* 如果字符串 `b` 的最低位是 1，则将 1 加到进位 `carry` 中

此时，`carry` 有三种情况：$(00)_2$、$(01)_2$、$(10)_2$，然后将 `carry` 的最低位作为结果的最低位，将 `carry` 的最高位加入下一位的计算中。

重复上述步骤，直到两个数字和 `carry` 都为空。

### 代码实现

```js
function addBinary(a, b) {
  let i = a.length;
  let j = b.length;
  let result = '';
  let carry = 0;

  while (i > -1 || j > -1 || carry) {
    let b1 = a[--i] || '0';
    let b2 = b[--j] || '0';

    if (b1 === '1') ++carry;
    if (b2 === '1') ++carry;

    result = (carry % 2) + result;

    carry = Math.floor(carry / 2);
  }

  return result;
}
```

### 复杂度分析

* 时间复杂度：$ O(n) $. $n$ 为最长的字符长度
* 空间复杂度：$ O(n) $.
