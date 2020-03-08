import MaxQueue from "./solution.js";

test("example 1", () => {
  const queue = new MaxQueue();

  queue.push_back(1);
  queue.push_back(2);

  expect(queue.max_value()).toBe(2);
  expect(queue.pop_front()).toBe(1);
  expect(queue.max_value()).toBe(2);
  expect(queue.pop_front()).toBe(2);
  expect(queue.max_value()).toBe(-1);
  expect(queue.pop_front()).toBe(-1);
});

test("example 2", () => {
  const queue = new MaxQueue();

  queue.push_back(1);
  queue.push_back(2);

  expect(queue.max_value()).toBe(2);
  expect(queue.pop_front()).toBe(1);
  expect(queue.max_value()).toBe(2);
  expect(queue.pop_front()).toBe(2);
  expect(queue.max_value()).toBe(-1);
  expect(queue.pop_front()).toBe(-1);
});
