# Partition List

> 题目地址: [https://leetcode-cn.com/problems/partition-list/](https://leetcode-cn.com/problems/partition-list/)

## 题目描述

给定一个链表和一个特定值 `x`，对链表进行分隔，使得所有小于 `x` 的节点都在大于或等于 `x` 的节点之前。

你应当保留两个分区中每个节点的初始相对位置。

示例:

```
输入: head = 1->4->3->2->5->2, x = 3
输出: 1->2->2->4->3->5
```

------

## 题解

### 双指针 + 前驱节点

#### 代码实现

```js
function partition(head, x) {
  const lessFront = new ListNode('front');
  const greaterFront = new ListNode('front');

  let lessNode = lessFront;
  let greaterNode = greaterFront;
  let node = head;
  while (node) {
    if (node.val >= x) {
      greaterNode.next = node;
      greaterNode = greaterNode.next;
    } else {
      lessNode.next = node;
      lessNode = lessNode.next;
    }

    node = node.next;
  }
  greaterNode.next = null;
  lessNode.next = greaterFront.next;

  return lessFront.next;
}
```

#### 复杂度分析

* 时间复杂度：$ O(n) $.
* 空间复杂度：$ O(1) $.
