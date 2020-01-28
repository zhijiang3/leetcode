# Self Dividing Numbers

> 题目地址: [https://leetcode-cn.com/problems/self-dividing-numbers/](https://leetcode-cn.com/problems/self-dividing-numbers/)

## 题目描述

*自除数* 是指可以被它包含的每一位数除尽的数。

例如，`128` 是一个自除数，因为 `128 % 1 == 0`，`128 % 2 == 0`，`128 % 8 == 0`。

还有，自除数不允许包含 `0`。

给定上边界和下边界数字，输出一个列表，列表的元素是边界（含边界）内所有的自除数。

示例 1：

```
输入：
上边界left = 1, 下边界right = 22
输出： [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
```

注意：

每个输入参数的边界满足 `1 <= left <= right <= 10000`。

------

## 题解

对于给定范围内的每个数，先判断数字是否非零，若数字非零再判断能否被每一位除尽即可。

对于数字的每一位至少有两种方法可以得到：

* 不断对数字除以 `10` 再余 `10`
* 转成字符串后拿字符串的最后一位

### 代码实现

```js
function selfDividingNumbers(left, right) {
  const result = [];

  for (let n = left; n <= right; n++) {
    let i = n;
    while (i) {
      let bit = i % 10;
      if (bit === 0 || n % bit > 0) break;

      i = (i / 10) | 0;
    }
    if (i === 0) result.push(n);
  }

  return result;
}
```

### 复杂度分析

* 时间复杂度：$ O(D) $. $ D $ 是再区间 $ [L,R] $ 里的整数数量。
* 空间复杂度：$ O(D) $.使用了一个数组来存放结果。
