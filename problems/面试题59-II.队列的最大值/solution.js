var MaxQueue = function() {
  this.queue = [];
  this.maxStack = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
  if (this.maxStack.length) {
    return this.maxStack[0];
  }

  return -1;
};

/**
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
  this.queue.push(value);

  while (this.maxStack.length && this.maxStack[this.maxStack.length - 1] < value) {
    this.maxStack.pop();
  }

  this.maxStack.push(value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
  if (this.queue.length) {
    const value = this.queue.shift();

    if (value === this.maxStack[0]) {
      this.maxStack.shift();
    }

    return value;
  }

  return -1;
};

export default MaxQueue;
