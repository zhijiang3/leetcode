# Implement Stack using Queues

> 题目地址: [https://leetcode-cn.com/problems/implement-stack-using-queues/](https://leetcode-cn.com/problems/implement-stack-using-queues/)

## 题目描述

使用队列实现栈的下列操作：

* `push(x)` -- 元素 x 入栈
* `pop()` -- 移除栈顶元素
* `top()` -- 获取栈顶元素
* `empty()` -- 返回栈是否为空

注意:

你只能使用队列的基本操作-- 也就是 `push to back`, `peek/pop from front`, `size`, 和 `is empty` 这些操作是合法的。
你所使用的语言也许不支持队列。 你可以使用 `list` 或者 `deque`（双端队列）来模拟一个队列 , 只要是标准的队列操作即可。
你可以假设所有操作都是有效的（例如, 对一个空的栈不会调用 `pop` 或者 `top` 操作）。

------

## 题解

先来看看栈和队列的区别，如下所示：

```
         |-----------|
dequeue ←| A | B | C |← enqueue
         |-----------|
             queue
# 队列 是一种 先进先出(FIFO, First-In-First-Out) 的数据结构

  pop push
   ↑   ↓
   |---|
   | C |
   |---|
   | B |
   |---|
   | A |
   |---|
   stack
# 栈 是一种 后进先出(LIFO, Last-In-First-Out) 的数据结构
```

要用队列实现栈，有两种方法：

1. 在进栈时，队列正常入队；在出栈时，对队列的所有元素出队，拿到最后一个元素，把其余的放回队列，并返回最后一个元素。
  入栈时间复杂度：$ O(1) $
  出栈时间复杂度：$ O(n) $
2. 在进栈时，把元素添加到队首中；在出栈时，直接出队即可。
  入栈时间复杂度：$ O(n) $
  出栈时间复杂度：$ O(1) $

两种方法都可行，具体实现取决于场景，这里使用第二种方法（出栈使用的较多）。

### 代码实现

```js
/**
 * Initialize your data structure here.
 */
var MyStack = function() {
  this.queue = new Queue();
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  const queue = new Queue();

  // 推到队列的顶部
  queue.enqueue(x);

  // 把剩下的补到队列后边
  while (!this.queue.isEmpty()) {
    queue.enqueue(this.queue.peek());

    this.queue.dequeue();
  }

  this.queue = queue;
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
  // 因为每次入栈都是把元素添加到队首中，这里直接出队就是栈顶元素
  const x = this.queue.peek();
  this.queue.dequeue();

  return x;
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
  return this.queue.peek();
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.queue.isEmpty();
};

```

### 复杂度分析

* 时间复杂度：
  * `push`：$O(n)$
  * `pop`：$O(1)$
  * `top`：$O(1)$
  * `empty`：$O(1)$

* 空间复杂度：
  * `push`：$O(n)$ 使用了一个新的队列。
  * `pop`：$O(1)$
  * `top`：$O(1)$
  * `empty`：$O(1)$
