# Merge k Sorted Lists

> 题目地址: [https://leetcode-cn.com/problems/merge-k-sorted-lists/](https://leetcode-cn.com/problems/merge-k-sorted-lists/)

## 题目描述

合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。

示例:

```
输入:
[
  1->4->5,
  1->3->4,
  2->6
]
输出: 1->1->2->3->4->4->5->6
```

------

## 题解

### 依次合并链表

#### 代码实现

```js
/**
 * @param {ListNode} head1
 * @param {ListNode} head2
 * @return {ListNode}
 */
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

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function mergeKLists(lists) {
  let prevMergeList = null;

  for (let head of lists) {
    prevMergeList = mergeTwoLists(prevMergeList, head);
  }

  return prevMergeList;
}
```

#### 复杂度分析

* 时间复杂度：$ O(k N) $. 其中 $N$ 是节点的总数目，$k$ 为链表的数目
* 空间复杂度：$ O(1) $.

### 分治法

#### 代码实现

```js
/**
 * @param {ListNode} head1
 * @param {ListNode} head2
 * @return {ListNode}
 */
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

/**
 * @param {ListNode[]} lists
 * @param {number} start
 * @param {number} end
 * @return {ListNode}
 */
function merge(lists, start, end) {
  if (start > end) return null;
  else if (start === end) return lists[end];

  const mid = Math.floor((start + end) / 2);

  return mergeTwoLists(
    merge(lists, start, mid),
    merge(lists, mid + 1, end)
  );
}

function mergeKLists(lists) {
  return merge(lists, 0, lists.length - 1);
}
```

#### 复杂度分析

* 时间复杂度：$ O(N \log k) $. 其中 $N$ 是节点的总数目，$k$ 为链表的数量
* 空间复杂度：$ O(\log k) $. 递归使用到了 $\log k$ 层
