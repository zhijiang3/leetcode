# 圆圈中最后剩下的数字

> 题目地址: [https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/](https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/)

## 题目描述

`0, 1, ..., n-1` 这 n 个数字排成一个圆圈，从数字 0 开始，每次从这个圆圈里删除第 m 个数字。求出这个圆圈里剩下的最后一个数字。

例如，0、1、2、3、4 这 5 个数字组成一个圆圈，从数字 0 开始每次删除第 3 个数字，则删除的前 4 个数字依次是 2、0、4、1，因此最后剩下的数字是 3。
 
示例 1：

```
输入: n = 5, m = 3
输出: 3
```

示例 2：

```
输入: n = 10, m = 17
输出: 2
```

**限制：**

* `1 <= n <= 10^5`
* `1 <= m <= 10^6`

------

## 题解

> [https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/solution/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-by-lee/](https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/solution/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-by-lee/)

### 代码实现

```js
function lastRemaining(n, m) {
  let f = 0;

  for (let i = 2; i < n + 1; ++i) {
    f = (m + f) % i;
  }

  return f;
}
```

### 复杂度分析

* 时间复杂度：$ O(n) $.
* 空间复杂度：$ O(1) $.
