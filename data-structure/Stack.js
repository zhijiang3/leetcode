export default class Stack {
  constructor() {
    this.elements = [];
  }

  /**
   * @param {*} x
   */
  push(x) {
    this.elements.push(x);
  }

  /**
   * @return {*}
   */
  pop() {
    return this.elements.pop();
  }

  /**
   * @return {*}
   */
  peek() {
    return this.elements[this.elements.length - 1];
  }

  /**
   * @return {boolean}
   */
  isEmpty() {
    return this.elements.length === 0;
  }

  /**
   * @return {number}
   */
  size() {
    return this.elements.length;
  }
}
