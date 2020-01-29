# Odd Even Linked List

> 题目地址: [https://leetcode-cn.com/problems/odd-even-linked-list/](https://leetcode-cn.com/problems/odd-even-linked-list/)

## 题目描述

给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。请注意，这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性。

请尝试使用原地算法完成。你的算法的空间复杂度应为 $O(1)$，时间复杂度应为 $O(nodes)$，`nodes` 为节点总数。

示例 1:

```
输入: 1->2->3->4->5->NULL
输出: 1->3->5->2->4->NULL
```

示例 2:

```
输入: 2->1->3->5->6->4->7->NULL 
输出: 2->3->6->7->1->5->4->NULL
```

说明:

* 应当保持奇数节点和偶数节点的相对顺序。
* 链表的第一个节点视为奇数节点，第二个节点视为偶数节点，以此类推。

------

## 题解

把奇节点放到一个链表中，再把偶节点放到另一个链表中，然后把奇节点的尾部和偶节点的头部拼接起来即可。

我们用 `oddNode` 记录奇节点，`evenNode` 记录偶节点，`evenHeadNode` 记录偶节点的头节点。

以 `1 -> 3 -> 2 -> null` 链表为例子：

```
# ↓ = oddNode, ↑ = evenNode, - = evenHeadNode 

↓
1 -> 3 -> 2 -> null
     -
     ↑
-------------------------------------
   |------|
↓  |      v
1 -| 3 -> 2 -> null
     -
     ↑
# 修改奇节点的链，指向下一个奇节点
-------------------------------------
          ↓
   |------|
   |      v
1 -| 3 -> 2 -> null
     ↑
# 把奇节点的指针移向下一个奇节点
-------------------------------------
          ↓
   |------|
   |      v
1 -| 3 -| 2 -> null
     -  |       ^
     ↑  |-------|
# 修改偶节点的链，指向下一个偶节点
-------------------------------------
          ↓
   |------|
   |      v
1 -| 3 -| 2 -> null
     -  |       ^
        |-------|
                ↑
# 把奇节点的指针移向下一个奇节点
-------------------------------------
# 最终指向

1 -> 3
# 奇链表

2 -> null
# 偶链表

1 -> 3 -> 2 -> null
# 把奇链表的尾部和偶链表的头部拼接起来即可
```

### 代码实现

```js
function oddEvenList(head) {
  if (!head) return head;

  let oddNode = head;
  let evenNode = head.next;
  let evenHeadNode = evenNode;

  while (evenNode && evenNode.next) {
    oddNode.next = evenNode.next;
    oddNode = oddNode.next;
    evenNode.next = oddNode.next;
    evenNode = evenNode.next;
  }
  oddNode.next = evenHeadNode;

  return head;
}
```

### 复杂度分析

* 时间复杂度：$ O(n) $.
* 空间复杂度：$ O(1) $.
