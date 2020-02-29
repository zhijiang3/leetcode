# Remove Linked List Elements

> 题目地址: [https://leetcode-cn.com/problems/remove-linked-list-elements/](https://leetcode-cn.com/problems/remove-linked-list-elements/)

## 题目描述

删除链表中等于给定值 val 的所有节点。

示例:

```
输入: 1->2->6->3->4->5->6, val = 6
输出: 1->2->3->4->5
```

------

## 题解

删除链表的值需要注意以下几个地方：

1. 删除的是头节点
2. 删除的节点是连续的
3. 删除任意位置的节点

这里主要要注意的是删除头节点和连续的节点，对此可以创建一个无作用的头节点，作为传入的链表新的头节点。

### 代码实现

```js
function removeElements(head, val) {
  const newHead = new ListNode('head');
  newHead.next = head;

  let prev = newHead;
  while (head) {
    if (head.val === val) {
      prev.next = head.next;
    } else {
      prev = head;
    }

    head = head.next;
  }

  return newHead.next;
}
```

### 复杂度分析

* 时间复杂度：$ O(n) $.
* 空间复杂度：$ O(1) $.
