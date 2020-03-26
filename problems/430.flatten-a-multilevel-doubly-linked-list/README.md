# Flatten A Multilevel Doubly Linked List

> 题目地址: [https://leetcode-cn.com/problems/flatten-a-multilevel-doubly-linked-list/](https://leetcode-cn.com/problems/flatten-a-multilevel-doubly-linked-list/)

## 题目描述

您将获得一个双向链表，除了下一个和前一个指针之外，它还有一个子指针，可能指向单独的双向链表。这些子列表可能有一个或多个自己的子项，依此类推，生成多级数据结构，如下面的示例所示。

扁平化列表，使所有结点出现在单级双链表中。您将获得列表第一级的头部。

示例:

```
输入:
 1---2---3---4---5---6--NULL
         |
         7---8---9---10--NULL
             |
             11--12--NULL

输出:
1-2-3-7-8-11-12-9-10-4-5-6-NULL
```

**以上示例的说明:**

给出以下多级双向链表:

![multi level linked list](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/12/multilevellinkedlist.png)

我们应该返回如下所示的扁平双向链表:

![multi level linked list flattened](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/12/multilevellinkedlistflattened.png)

------

## 题解

首先想到的是按题目指定的顺序遍历多级链表，所以可以使用递归或者广度优先搜索的方式遍历链表。

在遍历链表的同时，我们需要保留 2 个指针，当前节点的指针、前一次遍历的节点的指针，通过调整保留的指针使得链表扁平化即可：

```
prev.next = curr;    # 前一次遍历的下一个指针指向当前节点
curr.prev = prev;    # 当前节点的前一个指针指向前一次遍历的节点
```

### 代码实现

```js
/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
function flatten(head) {
  if (!head) return head;

  // front 的下一个节点指向 head
  const front = new Node('front', null, head, null);
  const stack = [];

  stack.push(head);

  let prev = front;
  while (stack.length) {
    const curr = stack.pop();

    prev.next = curr;
    curr.prev = prev;

    if (curr.next)
      stack.push(curr.next);

    // child 在 next 之后追加，那么会先遍历 child 的元素
    if (curr.child) {
      stack.push(curr.child);
      curr.child = null;
    }

    prev = curr;
  }
  // 清理 front 的指向
  front.next.prev = null;

  return front.next;
}
```

### 复杂度分析

* 时间复杂度：$ O(n) $. $n$ 为所有链表的总长度
* 空间复杂度：$ O(n) $.
