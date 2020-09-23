export default class Stack<T> {
  private elements: T[];

  constructor() {
    this.elements = [];
  }

  push(x: T) {
    this.elements.push(x);
  }

  pop() {
    return this.elements.pop();
  }

  peek() {
    return this.elements[this.elements.length - 1];
  }

  isEmpty() {
    return this.elements.length === 0;
  }

  size() {
    return this.elements.length;
  }
}
