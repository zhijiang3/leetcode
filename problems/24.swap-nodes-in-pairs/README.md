# Swap Nodes in Pairs

> 题目地址: [https://leetcode-cn.com/problems/swap-nodes-in-pairs/](https://leetcode-cn.com/problems/swap-nodes-in-pairs/)

## 题目描述

给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

**你不能只是单纯的改变节点内部的值**，而是需要实际的进行节点交换。

示例:

```
给定 1->2->3->4, 你应该返回 2->1->4->3.
```

------

## 题解

使用 3 个指针，`prev`、`curr` 和 `next`，首先 `curr` 和 `next` 的节点是两个需要互相交换的节点，也就是：

```
       p    c    n     # 这里 b 和 c 需要交换
       ↓    ↓    ↓
... -> a -> b -> c -> ...

-----------------------------------------
prev.next = next;
curr.next = next.next;
next.next = curr;
-----------------------------------------

       p    c    n
       ↓    ↓    ↓
            |----------v
... -> a    b <- c    ...
       |---------^

```

节点交换之后，把指针移动到下一个两个节点继续进行交换即可。

### 代码实现

```js
function swapPairs(head) {
  if (!head || !head.next) return head;

  const front = new ListNode('front');

  let prev = front;
  let curr = head;
  let next = head.next;
  while (next) {
    prev.next = next;
    curr.next = next.next;
    next.next = curr;

    prev = curr;
    curr = curr.next;
    next = curr ? curr.next : null;
  }

  return front.next;
}
```

### 复杂度分析

* 时间复杂度：$ O(n) $.
* 空间复杂度：$ O(1) $.
