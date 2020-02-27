# Reorder List

> 题目地址: [https://leetcode-cn.com/problems/reorder-list/](https://leetcode-cn.com/problems/reorder-list/)

## 题目描述

给定一个单链表 L：$L_0→L_1→…→L_{n-1}→L_n$，

将其重新排列后变为：$L_0→L_n→L_1→L_{n-1}→L_2→L_{n-2}→…$

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

示例 1:

```
给定链表 1->2->3->4, 重新排列为 1->4->2->3.
```

示例 2:

```
给定链表 1->2->3->4->5, 重新排列为 1->5->2->4->3.
```

------

## 题解

### 反转中间节点再合并

以 `head = 1 -> 2 -> 3 -> 4 -> null` 为例：

首先使用快慢指针（[例题 876](../876.middle-of-the-linked-list/README.md)）找到中间节点：

```
      head = 1 -> 2 -> 3 -> 4 -> null
middleNode = 3 -> 4 -> null
```

然后从中间节点反转链表（[例题 206](../206.reverse-linked-list/README.md)）：

```
       head = 1 -> 2 -> 3 -> null   # 注意这里中间节点 3.next 因为反转节点导致变成 null
reverseNode = 4 -> 3 -> null
```

最后依次合并 `1 -> 2 -> 3 -> null` 和 `4 -> 3 -> null` 即可。

#### 代码实现

```js
function reorderList(head) {
  // 找到中间节点
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // 反转从中间到链表末尾的节点
  let prev = null;
  let tail = slow;
  while (tail) {
    const next = tail.next;
    tail.next = prev;
    prev = tail;
    tail = next;
  }

  // 合并两个链表
  let node = head;
  while (prev) {
    const headNext = node.next;
    const tailNext = prev.next;

    if (prev !== headNext) prev.next = headNext;
    if (node !== prev) node.next = prev;

    node = headNext;
    prev = tailNext;
  }

  return head;
}
```

#### 复杂度分析

* 时间复杂度：$ O(n) $.
* 空间复杂度：$ O(1) $.

### 使用栈辅助

还是以 `head = 1 -> 2 -> 3 -> 4 -> null` 为例：

我们把节点依次压入栈：

```
                                    |---|
                                    | 4 |
                                    |---|
                                    | 3 |
 head = 1 -> 2 -> 3 -> 4 -> null    |---|
                                    | 2 |
                                    |---|
                                    | 1 |
                                    |---|
                                    stack
```

然后从 `head` 节点开始，指向栈顶的元素，然后指针移动到 `head` 的下一个节点和把站顶元素弹出，循环直到重排完毕：

```
        |-------------------------> |---|
        |    |--------------------- | 4 |
        |    |                      |---|
        |    v                      | 3 |
 head = 1 -> 2 -> 3 -> 4 -> null    |---|
        ↑                           | 2 |
                                    |---|
                                    | 1 |
                                    |---|
                                    stack


                                    |---|
                                    | 4 | # 把栈顶元素弹出
        |--------------|            |---|
        |              v                  # 这里的指向是没变的, 1 -> 4 -> 2 -> ...
        |    | ------- |            |---|
        |    v         |            | 3 |
 head = 1 -> 2 -> 3 -> 4 -> null    |---|
             ↑ # 指针移动到下一个节点  | 2 |
                                    |---|
                                    | 1 |
                                    |---|
                                    stack
------------------------------------------------------
                  | --------------------------> |---|
                  |    | ---------------------- | 3 |
 # 指向更新后的 head|    v                        |---|
 head = 1 -> 4 -> 2 -> 3 -> 4 -> 2 -> 3 -> ...  | 2 |
                  ↑                             |---|
                                                | 1 |
                                                |---|
                                                stack


                                             |---|
                                             | 3 | # 把栈顶元素弹出
                                             |---|

 # 指向更新后的 head                           |---|
 head = 1 -> 4 -> 2 -> 3 -> 3 -> ...         | 2 |
                       ↑ # 指针移动到下一个节点 |---|
                                             | 1 |
                                             |---|
                                             stack
------------------------------------------------------
# 此时节点已经有 4 个了，和传入时的链表一样，所以重排已完成
head = 1 -> 4 -> 2 -> 3 -> 3 -> ...
                      ↑
# 又因为当前指针指向重排后的最后一个节点，所以这里要把指针的 3.next -> null，故：
head = 1 -> 4 -> 2 -> 3 -> null
```

#### 代码实现

```js
var reorderList = function(head) {
  if (!head) return head;

  const stack = [];

  let node = head;
  while (node) {
    stack.push(node);
    node = node.next;
  }

  node = head;
  let nextNode = head.next;
  for (let i = 1, len = stack.length; i <= len; i++) {
    if (i % 2 === 1) {
      node.next = stack.pop();
    } else {
      node.next = nextNode;
      nextNode = nextNode.next;
    }
    node = node.next;
  }
  node.next = null;
};
```

#### 复杂度分析

* 时间复杂度：$ O(n) $.
* 空间复杂度：$ O(n) $. 使用了一个栈保存链表
