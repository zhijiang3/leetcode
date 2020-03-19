# Reverse Linked List II

> 题目地址: [https://leetcode-cn.com/problems/reverse-linked-list-ii/](https://leetcode-cn.com/problems/reverse-linked-list-ii/)

## 题目描述

反转从位置 `m` 到 `n` 的链表。请使用一趟扫描完成反转。

**说明:**

`1 ≤ m ≤ n ≤ 链表长度`。

示例:

```
输入: 1->2->3->4->5->NULL, m = 2, n = 4
输出: 1->4->3->2->5->NULL
```

------

## 题解

找到第 `m` 个节点，从 `m` 开始翻转链表直到 `n`，翻转完成后修正节点指向。

### 代码实现

```js
function reverseBetween(head, m, n) {
  if (!head) return head;

  // 使用一个前驱节点
  const front = new ListNode("front");
  front.next = head;

  let i;
  // 保留上一个节点的指针
  let frontPrev = front;
  let node = head;
  for (i = 1; i < m; i++) {
    frontPrev = node;
    node = node.next;
  }

  let reversePrev = null;
  for (i = m; i <= n; i++) {
    const next = node.next;

    // 翻转链表
    node.next = reversePrev;

    // 修改指针
    reversePrev = node;
    node = next;
  }

  // frontPrev.next.next 是反转之后的最后一个节点
  // node 是最后一个反转的节点的下一个节点
  frontPrev.next.next = node;
  // reversePrev 是反转后节点的头节点指针
  frontPrev.next = reversePrev;

  return front.next;
}
```

### 复杂度分析

* 时间复杂度：$ O(n) $.
* 空间复杂度：$ O(1) $.
