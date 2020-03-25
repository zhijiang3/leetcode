# Reverse Nodes In K-Group

> 题目地址: [https://leetcode-cn.com/problems/reverse-nodes-in-k-group/](https://leetcode-cn.com/problems/reverse-nodes-in-k-group/)

## 题目描述

给你一个链表，每 *k* 个节点一组进行翻转，请你返回翻转后的链表。

*k* 是一个正整数，它的值小于或等于链表的长度。

如果节点总数不是 *k* 的整数倍，那么请将最后剩余的节点保持原有顺序。

示例：

给你这个链表：`1->2->3->4->5`

当 k = 2 时，应当返回: `2->1->4->3->5`

当 k = 3 时，应当返回: `3->2->1->4->5`

**说明：**

* 你的算法只能使用常数的额外空间。
* **你不能只是单纯的改变节点内部的值**，而是需要实际进行节点交换。

------

## 题解

首先能想到的是对链表进行每 `k` 个一组，如果链表长度为 `len`，那么我们可以得到共 $\lfloor \frac{len}{k} \rfloor$ 组需要反转的链表。

接着我们对每组链表进行反转，每次反转完成后，需要保留头指针，尾指针，和下一组链表的开始节点。

### 代码实现

```js
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head, k) {
  let node = head;
  let next, prev = null;
  while (k--) {
    next = node.next;

    node.next = prev;
    prev = node;

    node = next;
  }

  return {
    head: prev,
    tail: head,
    next
  };
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function reverseKGroup(head, k) {
  const front = new ListNode('front');

  let size = 0;
  let node = head;
  while (node) {
    // 保存新的头节点
    if (++size === k)
      front.next = node;

    node = node.next;
  }
  // 计算需要反转的次数
  size = Math.floor(size / k);

  let prevTail = head;
  for (let i = 0; i < size; ++i) {
    const list = reverseList(head, k);

    // 调整反转后的指向
    prevTail.next = list.head;
    prevTail = list.tail;
    // 从反转前的下一个节点开始，继续反转
    head = list.next;
  }
  // 修正剩余节点的指向
  prevTail.next = head;

  return front.next;
}
```

### 复杂度分析

* 时间复杂度：$ O(n) $.
* 空间复杂度：$ O(1) $.
