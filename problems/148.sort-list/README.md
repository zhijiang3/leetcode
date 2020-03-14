# Sort List

> 题目地址: [https://leetcode-cn.com/problems/sort-list/](https://leetcode-cn.com/problems/sort-list/)

## 题目描述

在 $O(n \log n)$ 时间复杂度和常数级空间复杂度下，对链表进行排序。

示例 1:

```
输入: 4->2->1->3
输出: 1->2->3->4
```

示例 2:

```
输入: -1->5->3->4->0
输出: -1->0->3->4->5
```

------

## 题解

### 归并排序递归版

#### 代码实现

```js
function sortList(head) {
  if (!head || !head.next) return head;

  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  const next = slow.next;
  slow.next = null;

  let left = sortList(head);
  let right = sortList(next);

  const front = new ListNode("front");
  let node = front;
  while (left && right) {
    if (left.val < right.val) {
      node.next = left;
      left = left.next;
    } else {
      node.next = right;
      right = right.next;
    }
    node = node.next;
  }
  node.next = left ? left : right;

  return front.next;
}
```

#### 复杂度分析

* 时间复杂度：$ O(n \log n) $.
* 空间复杂度：$ O(\log n) $.
