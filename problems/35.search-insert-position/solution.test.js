import searchInsert from "./solution.js";

test("example 1", () => {
  expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
});

test("example 2", () => {
  expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
});

test("example 3", () => {
  expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
});

test("example 4", () => {
  expect(searchInsert([1, 3, 5, 6], 0)).toBe(0);
});

test("example 5", () => {
  expect(searchInsert([-10, -5, 0, 3, 5], -7)).toBe(1);
});
