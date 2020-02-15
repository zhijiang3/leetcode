# Sum Of Two Integers

> 题目地址: [https://leetcode-cn.com/problems/sum-of-two-integers/](https://leetcode-cn.com/problems/sum-of-two-integers/)

## 题目描述

**不使用**运算符 `+` 和 `-` ​​​​​​​，计算两整数 ​​​​​​​`a` 、`b` ​​​​​​​之和。

示例 1:

```
输入: a = 1, b = 2
输出: 3
```

示例 2:

```
输入: a = -2, b = 3
输出: 1
```

------

## 题解

> 该题解参考[https://leetcode-cn.com/problems/sum-of-two-integers/solution/wei-yun-suan-xiang-jie-yi-ji-zai-python-zhong-xu-y/](https://leetcode-cn.com/problems/sum-of-two-integers/solution/wei-yun-suan-xiang-jie-yi-ji-zai-python-zhong-xu-y/)

在不使用 `+` 或 `-` 运算符的前提下，为两个数相加，需要用到位运算。

首先来看两个位相加的结果：

```
1 + 1 = 0 (需要进位)
1 + 0 = 1
0 + 1 = 1
0 + 0 = 0
```

由上可知，如果对两个数进行 **异或** 操作即可得到 **没有进位的和**。

接下来要找到进位的数，在位运算中，可以使用 **与操作** 找到需要进的位，如 `5(0101) & 3(0011)`：

```
  0 1 0 1
& 0 0 1 1
---------
  0 0 0 1
```

由结果可以看出，最后一位需要进位，所以我们把结果 **左移 1 个位置(相当于进一位)，再与两个整数异或的结果相加（也就是再异或一次）**，一直重复直到不需要进位为止，即：

```
      a ^ b ^ 进的位 ^ 进的位 ^ ... # 一直到不需要再进位
相当于 a + b + 进的位 + 进的位 + ...
        ↑ 这里的 + 指的是异或（无进位相加）
```

### 代码实现

```js
function getSum(a, b) {
  while (b) {
    const carry = (a & b) << 1;

    a = (a ^ b);
    b = carry;
  }

  return a;
}
```

### 复杂度分析

* 时间复杂度：$ O(\log n) $. $n$ 是数字 `b` 的位数
* 空间复杂度：$ O(1) $.
