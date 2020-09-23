export default class Queue<T> {
  private queue: T[];

  constructor() {
    this.queue = [];
  }

  enqueue(x: T) {
    this.queue.push(x);
  }

  peek() {
    return this.queue[0];
  }

  dequeue() {
    this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  size() {
    return this.queue.length;
  }
}
