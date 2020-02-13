import ListNode from "data-structure/ListNode";

/**
 * initialize your data structure here.
 */
var MinStack = function() {
  /** @type {ListNode} */
  this.elements = null;

  /** @type {ListNode} */
  this.minElements = null;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  const node = new ListNode(x);

  if (!this.elements) {
    this.elements = node;
  } else {
    node.next = this.elements;
    this.elements = node;
  }

  const minNode = new ListNode(x);
  if (!this.minElements) {
    this.minElements = minNode;
  } else if (minNode.val <= this.minElements.val) {
    minNode.next = this.minElements;
    this.minElements = minNode;
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if (this.elements === null) return;

  const popNode = this.elements;

  if (this.minElements && this.minElements.val === popNode.val) {
    this.minElements = this.minElements.next;
  }

  this.elements = this.elements.next;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.elements === null ? null : this.elements.val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minElements === null ? null : this.minElements.val;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

export default MinStack;
