# Merge Two Sorted Lists

> 题目地址: [https://leetcode-cn.com/problems/merge-two-sorted-lists/](https://leetcode-cn.com/problems/merge-two-sorted-lists/)

## 题目描述

将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

示例：

```
输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
```

------

## 题解

### 迭代

利用一个前驱节点，依次把最小的节点链接到前驱节点所在的链表中即可。

#### 代码实现

```js
function mergeTwoLists(head1, head2) {
  const front = new ListNode('front');

  let node = front;
  while (head1 && head2) {
    if (head1.val > head2.val) {
      node.next = head2;
      head2 = head2.next;
    } else {
      node.next = head1;
      head1 = head1.next;
    }

    node = node.next;
  }
  node.next = head1 ? head1 : head2;

  return front.next;
}
```

#### 复杂度分析

* 时间复杂度：$ O(n + m) $.
* 空间复杂度：$ O(1) $.
