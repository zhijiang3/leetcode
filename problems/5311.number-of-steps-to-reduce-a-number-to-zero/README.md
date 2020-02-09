# Number of Steps to Reduce a Number to Zero

> 题目地址: [https://leetcode-cn.com/problems/number-of-steps-to-reduce-a-number-to-zero/](https://leetcode-cn.com/problems/number-of-steps-to-reduce-a-number-to-zero/)

## 题目描述

给你一个非负整数 `num` ，请你返回将它变成 0 所需要的步数。 如果当前数字是偶数，你需要把它除以 2 ；否则，减去 1 。

示例 1：

```
输入：num = 14
输出：6
解释：
步骤 1) 14 是偶数，除以 2 得到 7 。
步骤 2） 7 是奇数，减 1 得到 6 。
步骤 3） 6 是偶数，除以 2 得到 3 。
步骤 4） 3 是奇数，减 1 得到 2 。
步骤 5） 2 是偶数，除以 2 得到 1 。
步骤 6） 1 是奇数，减 1 得到 0 。
```

示例 2：

```
输入：num = 8
输出：4
解释：
步骤 1） 8 是偶数，除以 2 得到 4 。
步骤 2） 4 是偶数，除以 2 得到 2 。
步骤 3） 2 是偶数，除以 2 得到 1 。
步骤 4） 1 是奇数，减 1 得到 0 。
示例 3：

输入：num = 123
输出：12
```

**提示：**

* `0 <= num <= 10^6`

------

## 题解

用无符号右移 1 位代替 `n / 2` 和 `n - 1` 的操作，右移之前 `n` 是偶数则 `steps + 1` 奇数则 `steps + 2`，需要注意对于 1 是只有 1 步的。

### 代码实现

```js
function numberOfSteps(num) {
  let steps = 0;

  while (num) {
    steps += num !== 1 && (num & 1) ? 2 : 1;
    num = num >> 1;
  }

  return steps;
}
```

### 复杂度分析

* 时间复杂度：$ O(\log n) $.
* 空间复杂度：$ O(1) $.
