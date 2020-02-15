import getSum from "./solution.js";

test("example 1", () => {
  expect(getSum(1, 2)).toBe(3);
});

test("example 2", () => {
  expect(getSum(-2, 3)).toBe(1);
});

test("example 3", () => {
  expect(getSum(5, 3)).toBe(8);
});
