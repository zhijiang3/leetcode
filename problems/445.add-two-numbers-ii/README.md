# Add Two Numbers II

> 题目地址: [https://leetcode-cn.com/problems/add-two-numbers-ii/](https://leetcode-cn.com/problems/add-two-numbers-ii/)

## 题目描述

给定两个**非空**链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储单个数字。将这两数相加会返回一个新的链表。

你可以假设除了数字 0 之外，这两个数字都不会以零开头。

**进阶:**

如果输入链表不能修改该如何处理？换句话说，你不能对列表中的节点进行翻转。

示例:

```
输入: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
输出: 7 -> 8 -> 0 -> 7
```

------

## 题解

### 方法一：反转链表

对两个链表反转再依次按位相加。

#### 代码实现

```js
/**
 * @param {ListNode} node
 * @return {ListNode}
 */
function reverseList(node) {
  let prev = null;
  while (node) {
    const next = node.next;

    node.next = prev;

    prev = node;
    node = next;
  }
  return prev;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  l1 = reverseList(l1);
  l2 = reverseList(l2);

  let carry = 0;
  let node = null, prev = null;
  while (l1 || l2 || carry) {
    if (l1) {
      carry += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      carry += l2.val;
      l2 = l2.next;
    }

    node = new ListNode(carry % 10);

    node.next = prev;
    prev = node;

    carry = Math.floor(carry / 10);
  }

  return prev;
}
```

#### 复杂度分析

* 时间复杂度：$ O(n) $.
* 空间复杂度：$ O(n) $.

### 方法二：栈

使用栈可模拟链表的反转的效果。

#### 代码实现

```js
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  const stack1 = [], stack2 = [];
  while (l1) {
    stack1.push(l1);
    l1 = l1.next;
  }
  while (l2) {
    stack2.push(l2);

    l2 = l2.next;
  }

  let carry = 0;
  let node = null, prev = null;
  while (stack1.length || stack2.length || carry) {
    if (stack1.length) {
      carry += stack1.pop().val;
    }
    if (stack2.length) {
      carry += stack2.pop().val;
    }

    node = new ListNode(carry % 10);

    node.next = prev;
    prev = node;

    carry = Math.floor(carry / 10);
  }

  return prev;
}
```

#### 复杂度分析

* 时间复杂度：$ O(n) $.
* 空间复杂度：$ O(n) $.
