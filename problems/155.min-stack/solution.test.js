import MinStack from "./solution.js";

test("入栈、出栈和查看栈顶元素", () => {
  const minStack = new MinStack();

  minStack.push(-2);
  minStack.push(0);
  minStack.push(-3);

  expect(minStack.top()).toBe(-3);

  minStack.pop();
  minStack.pop();

  expect(minStack.top()).toBe(-2);
});

test("获取最小元素", () => {
  const minStack = new MinStack();

  minStack.push(2);

  expect(minStack.getMin()).toBe(2);

  minStack.push(1);
  minStack.push(4);

  expect(minStack.getMin()).toBe(1);

  minStack.push(-2);
  minStack.push(-5);

  expect(minStack.getMin()).toBe(-5);

  minStack.pop();

  expect(minStack.getMin()).toBe(-2);

  minStack.pop();

  expect(minStack.getMin()).toBe(1);
});

test("重复数字获取最小元素", () => {
  const minStack = new MinStack();

  minStack.push(2);
  minStack.push(0);
  minStack.push(3);
  minStack.push(0);

  expect(minStack.getMin()).toBe(0);

  minStack.pop();
  expect(minStack.getMin()).toBe(0);

  minStack.pop();
  expect(minStack.getMin()).toBe(0);

  minStack.pop();
  expect(minStack.getMin()).toBe(2);
});
