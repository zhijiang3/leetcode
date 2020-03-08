# Remove Duplicates from Sorted List II

> 题目地址: [https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/)

## 题目描述

给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 *没有重复出现* 的数字。

示例 1:

```
输入: 1->2->3->3->4->4->5
输出: 1->2->5
```

示例 2:

```
输入: 1->1->1->2->3
输出: 2->3
```

------

## 题解

首先，由于**链表的头节点也可能出现重复，所以我们需要使用一个哨兵节点，作为传入的链表的头节点**。

然后，给定的链表是排序好的，所以我们只需要**判断当前的和下一个节点的值是否不一致即可得出是否重复**。

最后，对于出现重复值的节点，我们要保存其出现重复的第一个节点的前一个节点的指针，以便删除重复的节点。

### 代码实现

```js
function deleteDuplicates(head) {
  const sentinel = new ListNode('head');
  sentinel.next = head;

  let prev = sentinel;
  while (head) {
    let node = head;
    while (node && node.next && node.val === node.next.val) node = node.next;

    if (node === head) prev = node;
    else prev.next = node.next;

    head = node.next;
  }

  return sentinel.next;
}
```

### 复杂度分析

* 时间复杂度：$ O(n) $.
* 空间复杂度：$ O(1) $.
