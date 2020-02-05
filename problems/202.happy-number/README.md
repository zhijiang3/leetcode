# Happy Number

> 题目地址: [https://leetcode-cn.com/problems/happy-number/](https://leetcode-cn.com/problems/happy-number/)

## 题目描述
编写一个算法来判断一个数是不是“快乐数”。

一个“快乐数”定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是无限循环但始终变不到 1。如果可以变为 1，那么这个数就是快乐数。

示例: 

```
输入: 19
输出: true
解释: 
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
```

------

## 题解

十进制不快乐的循环只有一个，是 `4 -> 16 -> 37 -> 58 -> 89 -> 145 -> 42 -> 20 -> 4`，所以重复计算出现这些数后可以直接断言不是快乐数。

### 代码实现

```js
function isHappy(n) {
  if (n <= 0) return false;

  const loopNumbers = [4, 16, 37, 58, 89, 145, 42, 20];

  while (n !== 1 && !loopNumbers.includes(n)) {
    let sum = 0;
    let a = n;
    while (a) {
      sum += Math.pow(a % 10, 2);
      a = a / 10 | 0;
    }
    n = sum;
  }

  return n === 1;
}
```

### 复杂度分析

* 时间复杂度：$ O(n) $.
* 空间复杂度：$ O(1) $.
