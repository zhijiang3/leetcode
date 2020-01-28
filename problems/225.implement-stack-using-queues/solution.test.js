import MyStack from "./solution.js";

test("入栈和出栈", () => {
  const stack = new MyStack();

  stack.push(1);
  stack.push(2);

  expect(stack.pop()).toBe(2);
  expect(stack.pop()).toBe(1);
});

test("查看栈顶元素", () => {
  const stack = new MyStack();

  stack.push(1);
  stack.push(2);

  expect(stack.top()).toBe(2);
  expect(stack.pop()).toBe(2);
});

test("检查是否为空", () => {
  const stack = new MyStack();

  expect(stack.empty()).toBe(true);

  stack.push(1);
  stack.push(2);

  expect(stack.empty()).not.toBe(true);

  stack.pop();
  stack.pop();

  expect(stack.empty()).toBe(true);
});
