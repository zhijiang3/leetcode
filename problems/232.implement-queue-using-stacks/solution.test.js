import MyQueue from "./solution.js";

test("example 1", () => {
  const queue = new MyQueue();

  expect(queue.empty()).toBe(true);

  queue.push(1);
  queue.push(2);

  expect(queue.peek()).toBe(1);
  expect(queue.pop()).toBe(1);
  expect(queue.empty()).toBe(false);
});
