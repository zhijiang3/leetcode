import ListNode from "data-structure/ListNode";

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

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

export default MyLinkedList;
