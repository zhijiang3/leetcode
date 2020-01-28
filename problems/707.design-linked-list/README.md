# Design Linked List

> 题目地址: [https://leetcode-cn.com/problems/design-linked-list/](https://leetcode-cn.com/problems/design-linked-list/)

## 题目描述

设计链表的实现。您可以选择使用单链表或双链表。单链表中的节点应该具有两个属性：`val` 和 `next`。`val` 是当前节点的值，`next` 是指向下一个节点的指针/引用。如果要使用双向链表，则还需要一个属性 `prev` 以指示链表中的上一个节点。假设链表中的所有节点都是 `0-index` 的。

在链表类中实现这些功能：

* `get(index)`：获取链表中第 `index` 个节点的值。如果索引无效，则返回 `-1`。
* `addAtHead(val)`：在链表的第一个元素之前添加一个值为 `val` 的节点。插入后，新节点将成为链表的第一个节点。
* `addAtTail(val)`：将值为 `val` 的节点追加到链表的最后一个元素。
* `addAtIndex(index, val)`：在链表中的第 `index` 个节点之前添加值为 `val` 的节点。如果 `index` 等于链表的长度，则该节点将附加到链表的末尾。如果 index 大于链表长度，则不会插入节点。如果 `index` 小于 `0`，则在头部插入节点。
* `deleteAtIndex(index)`：如果索引 `index` 有效，则删除链表中的第 `index` 个节点。

示例：

```
MyLinkedList linkedList = new MyLinkedList();
linkedList.addAtHead(1);
linkedList.addAtTail(3);
linkedList.addAtIndex(1,2);   //链表变为1-> 2-> 3
linkedList.get(1);            //返回2
linkedList.deleteAtIndex(1);  //现在链表是1-> 3
linkedList.get(1);            //返回3
```

提示：

* 所有 `val` 值都在 `[1, 1000]` 之内。
* 操作次数将在 `[1, 1000]` 之内。
* 请不要使用内置的 `LinkedList` 库。

------

## 题解

### 代码实现

```js
/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {

  /** @var {ListNode} */
  this.head = null;

  /** @var {ListNode} */
  this.tail = null;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  let countIndex = 0;

  let currNode = this.head;
  while (currNode) {
    // 找到了节点
    if (countIndex === index) return currNode.val;

    countIndex++;
    currNode = currNode.next;
  }

  return -1;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  const node = new ListNode(val);

  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    node.next = this.head;
    this.head = node;
  }
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  const node = new ListNode(val);

  if (!this.tail) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  const insertNode = new ListNode(val);

  if (index <= 0) {
    this.addAtHead(val);
    return;
  }

  let countIndex = 0;
  let prevNode = null;
  let currNode = this.head;
  while (currNode) {
    if (countIndex === index) {
      prevNode.next = insertNode;
      insertNode.next = currNode;
      break;
    }

    countIndex++;
    prevNode = currNode;
    currNode = currNode.next;
  }

  // 判断是否需要添加到最后
  if (!currNode && countIndex === index) {
    this.addAtTail(val);
    return;
  }
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (!this.head) return;

  let countIndex = 0;
  let prevNode = null;
  let currNode = this.head;
  while (currNode) {
    if (countIndex === index) {
      // 修正头指针
      if (currNode === this.head) this.head = currNode.next;

      // 修正尾指针
      if (currNode === this.tail) this.tail = prevNode;

      if (prevNode) prevNode.next = currNode.next;
      return;
    }

    countIndex++;
    prevNode = currNode;
    currNode = currNode.next;
  }
};
```

### 复杂度分析

* 时间复杂度：
  * `addAtHead`：$O(1)$
  * `addAtTail`：$O(1)$
  * `addAtIndex`：$O(n)$
  * `deleteAtIndex`：$O(n)$
  * `get`：$O(n)$
* 空间复杂度：所有方法都是 $ O(1) $
