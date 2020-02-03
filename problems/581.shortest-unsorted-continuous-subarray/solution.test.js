import findUnsortedSubarray from "./solution.js";

test("example 1", () => {
  expect(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15])).toBe(5);
});

test("example 2", () => {
  expect(findUnsortedSubarray([1, 2, 2, 4, 9, 10, 22, 4, 29])).toBe(4);
});

test("example 3", () => {
  expect(findUnsortedSubarray([1, 3, 9, 5, 4, 2, 19, 2, 7, 3])).toBe(9);
});

test("example 4", () => {
  expect(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15])).toBe(5);
});
