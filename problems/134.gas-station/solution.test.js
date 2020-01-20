import canCompleteCircuit from "./solution.js";

test("example 1", () => {
  expect(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])).toBe(3);
});

test("example 2", () => {
  expect(canCompleteCircuit([2, 3, 4], [3, 4, 3])).toBe(-1);
});

test("example 3", () => {
  expect(canCompleteCircuit([3, 1, 1], [1, 2, 2])).toBe(0);
});

test("example 4", () => {
  expect(canCompleteCircuit([5, 8, 2, 8], [6, 5, 6, 6])).toBe(3);
});

test("example 5", () => {
  expect(canCompleteCircuit([1, 2, 3, 4, 5, 5, 70], [2, 3, 4, 3, 9, 6, 2])).toBe(6);
});
