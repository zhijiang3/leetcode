import Queue from "data-structure/Queue";

var RecentCounter = function() {
  this.queue = new Queue();
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  this.queue.enqueue(t);

  while (this.queue.peek() < t - 3000) {
    this.queue.dequeue();
  }

  return this.queue.size();
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

export default RecentCounter;
