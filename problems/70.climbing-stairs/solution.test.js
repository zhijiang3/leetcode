import climbStairs from "./solution.js";

test("example 1", () => {
  expect(climbStairs(2)).toBe(2);
});

test("example 2", () => {
  expect(climbStairs(3)).toBe(3);
});

test("example 3", () => {
  expect(climbStairs(5)).toBe(8);
});
