import MyStack from "./solution.js";

test("example 1", () => {
  const stack = new MyStack();

  stack.push(1);
  stack.push(2);

  expect(stack.top()).toBe(2);
  expect(stack.pop()).toBe(2);
  expect(stack.empty()).toBe(false);
});
