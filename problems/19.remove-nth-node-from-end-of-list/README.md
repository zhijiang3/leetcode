# 删除链表的倒数第N个节点

> 题目地址: [https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/)

## 题目描述

给定一个链表，删除链表的倒数第 *n* 个节点，并且返回链表的头结点。

示例：

```
给定一个链表: 1->2->3->4->5, 和 n = 2.

当删除了倒数第二个节点后，链表变为 1->2->3->5.
```

**说明：**

给定的 *n* 保证是有效的。

**进阶：**

你能尝试使用一趟扫描实现吗？

------

## 题解

常规思路是遍历一遍链表，得出链表的长度 `len`，然后利用 `len - n` 得到需要删除的节点在链表中的索引位置。

利用 `len - n` 的思想，我们再进一步优化，先走 `n` 步，那么剩下的链表距离就是 `len - n`，如下所示：

```
1->2->3->4->5
-----len----- => 总长度
--n---        => 走了 n 步
       ------ => 这里是剩下的，为 len - n 步
```

### 代码实现

```ts
function removeNthFromEnd(head: ListNode, n: number): ListNode {  const front = new ListNode(0);
  front.next = head;

  let slow = front, fast = head;
  while (n--) fast = fast.next;

  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;

  return front.next;
}
```

### 复杂度分析

* 时间复杂度：$ O(n) $.
* 空间复杂度：$ O(1) $.
