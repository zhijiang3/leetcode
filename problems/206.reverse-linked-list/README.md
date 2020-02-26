# Reverse Linked List

> 题目地址: [https://leetcode-cn.com/problems/reverse-linked-list/](https://leetcode-cn.com/problems/reverse-linked-list/)

## 题目描述

反转一个单链表。

示例:

```
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
```

**进阶:**

你可以迭代或递归地反转链表。你能否用两种方法解决这道题？

------

## 题解

通过两个指针，一个指针 `next` 保留即将要遍历的节点，一个指针 `prev` 记录上一个节点，在一次循环里修改链表的指向即可。

### 代码实现

```js
function reverseList(head) {
  let prev = null;
  let next = null;
  while (head) {
    next = head.next;
    head.next = prev;

    prev = head;
    head = next;
  }

  return prev;
}
```

### 复杂度分析

* 时间复杂度：$ O(n) $.
* 空间复杂度：$ O(1) $.
