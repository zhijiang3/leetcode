# 队列的最大值

> 题目地址: [https://leetcode-cn.com/problems/dui-lie-de-zui-da-zhi-lcof/](https://leetcode-cn.com/problems/dui-lie-de-zui-da-zhi-lcof/)

## 题目描述

请定义一个队列并实现函数 `max_value` 得到队列里的最大值，要求函数`max_value`、`push_back` 和 `pop_front` 的**均摊**时间复杂度都是 $O(1)$。

若队列为空，`pop_front` 和 `max_value` 需要返回 -1

示例 1：

```
输入: 
["MaxQueue","push_back","push_back","max_value","pop_front","max_value"]
[[],[1],[2],[],[],[]]
输出: [null,null,null,2,1,2]
```

示例 2：

```
输入: 
["MaxQueue","pop_front","max_value"]
[[],[],[]]
输出: [null,-1,-1]
```

限制：

* `1 <= push_back,pop_front,max_value的总操作数 <= 10000`
* `1 <= value <= 10^5`

------

## 题解

当一个元素进入队列的时候，它前面所有比它小的元素就不会再对最大值产生影响，这意味着我们可以使用一个辅助的栈或队列，并维护其单调递减的特性即可。

### 代码实现

```js
var MaxQueue = function() {
  this.queue = [];
  this.maxStack = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
  if (this.maxStack.length) {
    return this.maxStack[0];
  }

  return -1;
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
  this.queue.push(value);

  while (this.maxStack.length && this.maxStack[this.maxStack.length - 1] < value) {
    this.maxStack.pop();
  }

  this.maxStack.push(value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
  if (this.queue.length) {
    const value = this.queue.shift();

    if (value === this.maxStack[0]) {
      this.maxStack.shift();
    }

    return value;
  }

  return -1;
};
```

### 复杂度分析

* 时间复杂度：$ O(1) $. `push_back` 操作**均摊**时间复杂度为 $O(1)$
* 空间复杂度：$ O(n) $.
