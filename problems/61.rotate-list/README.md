# Rotate List

> 题目地址: [https://leetcode-cn.com/problems/rotate-list/](https://leetcode-cn.com/problems/rotate-list/)

## 题目描述

给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。

示例 1:

```
输入: 1->2->3->4->5->NULL, k = 2
输出: 4->5->1->2->3->NULL
解释:
向右旋转 1 步: 5->1->2->3->4->NULL
向右旋转 2 步: 4->5->1->2->3->NULL
```

示例 2:

```
输入: 0->1->2->NULL, k = 4
输出: 2->0->1->NULL
解释:
向右旋转 1 步: 2->0->1->NULL
向右旋转 2 步: 1->2->0->NULL
向右旋转 3 步: 0->1->2->NULL
向右旋转 4 步: 2->0->1->NULL
```

------

## 题解

首先对**向右旋转的次数 模(取余运算) 链表长度，得到实际需要向右旋转的次数**，也就是 `n = k % len`。

当一个链表向右旋转了 `n` 次后，第 `len - n` 个位置就是新链表的头节点，那么新链表头节点的前一个节点就是新链表的尾节点，即 `newTail = len - n - 1`，举个例子：

```
head = 1 -> 2 -> 3 -> 4 -> 5 -> null
   k = 2
--------------------------------------
# 新的头节点位置为 (5 - 2) = 3，也就是原链表的第 4 个节点（因为是从第 1 个节点开始，所以从 1 开始算起）
# 新的尾节点位置为 (5 - 2 - 1) = 2，也就是原链表的第 3 个节点
         null head
          ^    |
          |    v
1 -> 2 -> 3    4 -> 5  # 向右旋转了 2 次
^                   |  # 注意：这里原链表的尾节点指向了头节点
| ----------------- |
```

### 代码实现

```js
function rotateRight(head, k) {
  if (!head || !head.next) return head;

  let len = 1;
  let oldTail = head;
  while (oldTail.next) {
    len++;
    oldTail = oldTail.next;
  }
  oldTail.next = head;

  len = len - (k % len) - 1;
  let newTail = head;
  while (len) {
    newTail = newTail.next;
    len--;
  }
  head = newTail.next;

  newTail.next = null;

  return head;
}
```

### 复杂度分析

* 时间复杂度：$ O(n) $.
* 空间复杂度：$ O(1) $.
