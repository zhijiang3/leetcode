# Linked List Cycle

> 题目地址: [https://leetcode-cn.com/problems/linked-list-cycle/](https://leetcode-cn.com/problems/linked-list-cycle/)

## 题目描述

给定一个链表，判断链表中是否有环。

为了表示给定链表中的环，我们使用整数 `pos` 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 `pos` 是 `-1`，则在该链表中没有环。

示例 1：

![示例 1](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist.png)

```
输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。
```

示例 2：

![示例 3](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test2.png)

```
输入：head = [1,2], pos = 0
输出：true
解释：链表中有一个环，其尾部连接到第一个节点。
```

示例 3：

![示例 3](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test3.png)

```
输入：head = [1], pos = -1
输出：false
解释：链表中没有环。
```

**进阶：**

你能用 $O(1)$（即，常量）内存解决此问题吗？

------

## 题解

要检测是否环的问题，可以使用双指针去处理，**一个指针走得快，一个指针走得慢，如果链表是环，那么经过一次时间后，两个指针一定会相遇**。

### 代码实现

```js
function hasCycle(head) {
  let slowPointer = head;
  let fastPointer = head && head.next;

  while (fastPointer && slowPointer) {
    if (fastPointer === slowPointer) return true;

    fastPointer = fastPointer.next ? fastPointer.next.next : fastPointer.next;
    slowPointer = slowPointer.next;
  }

  return false;
}
```

### 复杂度分析

* 时间复杂度：$ O(n) $. 至少要走一遍才能得知是否环
* 空间复杂度：$ O(1) $.
