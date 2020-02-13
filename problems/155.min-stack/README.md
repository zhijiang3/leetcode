# Min Stack

> 题目地址: [https://leetcode-cn.com/problems/min-stack/](https://leetcode-cn.com/problems/min-stack/)

## 题目描述

设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。

* push(x) -- 将元素 x 推入栈中。
* pop() -- 删除栈顶的元素。
* top() -- 获取栈顶元素。
* getMin() -- 检索栈中的最小元素。

示例:

```
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.
```

------

## 题解

使用一个辅助的栈来存储最小值即可。

### 代码实现

```js
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  /** @type {ListNode} */
  this.elements = null;

  /** @type {ListNode} */
  this.minElements = null;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  const node = new ListNode(x);

  if (!this.elements) {
    this.elements = node;
  } else {
    node.next = this.elements;
    this.elements = node;
  }

  const minNode = new ListNode(x);
  if (!this.minElements) {
    this.minElements = minNode;
  } else if (minNode.val <= this.minElements.val) {
    minNode.next = this.minElements;
    this.minElements = minNode;
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if (this.elements === null) return;

  const popNode = this.elements;

  if (this.minElements && this.minElements.val === popNode.val) {
    this.minElements = this.minElements.next;
  }

  this.elements = this.elements.next;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.elements === null ? null : this.elements.val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minElements === null ? null : this.minElements.val;
};

```

### 复杂度分析

因为使用了一个辅助栈，所以数据结构整体的空间复杂度为 $O(n)$，$n$ 是入栈的数量

* 时间复杂度：
  * `push`：$O(1)$
  * `pop`：$O(1)$
  * `top`：$O(1)$
  * `getMin`：$O(1)$

* 空间复杂度：
  * `push`：$O(1)$
  * `pop`：$O(1)$
  * `top`：$O(1)$
  * `getMin`：$O(1)$
