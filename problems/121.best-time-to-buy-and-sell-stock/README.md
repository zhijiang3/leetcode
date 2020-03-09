# Best Time to Buy and Sell Stock

> 题目地址: [https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/)

## 题目描述

给定一个数组，它的第 `i` 个元素是一支给定股票第 `i` 天的价格。

如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。

注意你不能在买入股票前卖出股票。

示例 1:

```
输入: [7,1,5,3,6,4]
输出: 5
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
```

示例 2:

```
输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
```

------

## 题解

想要得到最大利润，一个比较直观的想法就是，找到最低的价格买入，找到最高的价格卖出。

所以我们保留一个**最大利润**和**最小买入价格**的变量，只需要一边遍历数组，一边计算最大利润即可。

### 代码实现

```js
function maxProfit(prices) {
  let max = 0;

  let min = prices[0];
  for (let p of prices) {
    if (p > min) {
      max = Math.max(max, p - min);
    } else {
      min = p;
    }
  }

  return max;
}
```

### 复杂度分析

* 时间复杂度：$ O(n) $.
* 空间复杂度：$ O(1) $.
