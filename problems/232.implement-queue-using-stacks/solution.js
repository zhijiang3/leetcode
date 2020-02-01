import Stack from "data-structure/Stack";

/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.stack = new Stack();
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  const newStack = new Stack();

  while (!this.stack.isEmpty()) {
    newStack.push(this.stack.pop());
  }

  this.stack.push(x);

  while (!newStack.isEmpty()) {
    this.stack.push(newStack.pop());
  }
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  return this.stack.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  return this.stack.peek();
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.stack.isEmpty();
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

export default MyQueue;
