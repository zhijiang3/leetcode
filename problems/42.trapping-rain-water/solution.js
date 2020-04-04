class Stack {
  constructor() {
    this.stack = [];
  }

  push(val) {
    this.stack.push(val);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}

/**
 * @param {number[]} height
 * @return {number}
 */
export default function trap(height) {
  const stack = new Stack();
  let ans = 0,
    current = 0;

  while (current < height.length) {
    while (!stack.isEmpty() && height[current] > height[stack.peek()]) {
      const top = stack.pop();

      if (stack.isEmpty()) break;

      const distance = current - stack.peek() - 1;
      const boundedHeight = Math.min(height[current], height[stack.peek()]) - height[top];

      ans += distance * boundedHeight;
    }

    stack.push(current++);
  }

  return ans;
}
