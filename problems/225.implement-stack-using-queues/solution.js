import Queue from "data-structure/Queue";

/**
 * Initialize your data structure here.
 */
var MyStack = function() {
  this.queue = new Queue();
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  const queue = new Queue();

  queue.enqueue(x);

  while (!this.queue.isEmpty()) {
    queue.enqueue(this.queue.peek());

    this.queue.dequeue();
  }

  this.queue = queue;
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
  const x = this.queue.peek();
  this.queue.dequeue();

  return x;
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
  return this.queue.peek();
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.queue.isEmpty();
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

export default MyStack;
