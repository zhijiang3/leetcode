# Implement Queue using Stacks

> 题目地址: [https://leetcode-cn.com/problems/implement-queue-using-stacks/](https://leetcode-cn.com/problems/implement-queue-using-stacks/)

## 题目描述

使用栈实现队列的下列操作：

* `push(x)` -- 将一个元素放入队列的尾部。
* `pop()` -- 从队列首部移除元素。
* `peek()` -- 返回队列首部的元素。
* `empty()` -- 返回队列是否为空。

示例:

```
MyQueue queue = new MyQueue();

queue.push(1);
queue.push(2);  
queue.peek();  // 返回 1
queue.pop();   // 返回 1
queue.empty(); // 返回 false
```

说明:

* 你只能使用标准的栈操作 -- 也就是只有 `push to top`, `peek/pop from top`, `size`, 和 `is empty` 操作是合法的。
* 你所使用的语言也许不支持栈。你可以使用 `list` 或者 `deque`（双端队列）来模拟一个栈，只要是标准的栈操作即可。
* 假设所有操作都是有效的 （例如，一个空的队列不会调用 `pop` 或者 `peek` 操作）。

------

## 题解

利用一个栈作为辅助，在入队时把元素添加到栈底即可。

### 代码实现

```js
/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.stack = new Stack();
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  const newStack = new Stack();

  while (!this.stack.isEmpty()) {
    newStack.push(this.stack.pop());
  }

  this.stack.push(x);

  while (!newStack.isEmpty()) {
    this.stack.push(newStack.pop());
  }
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  return this.stack.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  return this.stack.peek();
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.stack.isEmpty();
};
```

### 复杂度分析

* 时间复杂度：
  * `push`：$O(n)$
  * `pop`：$O(1)$
  * `peek`：$O(1)$
  * `empty`：$O(1)$

* 空间复杂度：
  * `push`：$O(n)$ 使用了一个辅助的栈
  * `pop`：$O(1)$
  * `peek`：$O(1)$
  * `empty`：$O(1)$
