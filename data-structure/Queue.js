export default class Queue {
  constructor() {
    this.queue = [];
  }

  /**
   * @param {number} x
   * @return {void}
   */
  enqueue(x) {
    this.queue.push(x);
  }

  /**
   * @return {number}
   */
  peek() {
    return this.queue[0];
  }

  /**
   * @return {void}
   */
  dequeue() {
    this.queue.shift();
  }

  /**
   * @return {boolean}
   */
  isEmpty() {
    return this.queue.length === 0;
  }

  size() {
    return this.queue.length;
  }
}
