import maxProduct from "./solution.js";

test("example 1", () => {
  expect(maxProduct([2, 3, -2, 4])).toBe(6);
});

test("example 2", () => {
  expect(maxProduct([-2, 0, -1])).toBe(0);
});

test("example 3", () => {
  expect(maxProduct([])).toBe(0);
});

test("example 4", () => {
  expect(maxProduct([-2])).toBe(-2);
});

test("example 5", () => {
  expect(maxProduct([-5, 2, 4, 1, -2, 2, -6, 3, -1, -1, -1, -2, -3, 5, 1])).toBe(86400);
});

test("example 6", () => {
  expect(maxProduct([2, -5, -2, -4, 3])).toBe(24);
});
