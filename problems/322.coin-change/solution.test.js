import coinChange from "./solution.js";

test("example 1", () => {
  expect(coinChange([1, 2, 5], 11)).toBe(3);
});

test("example 2", () => {
  expect(coinChange([2], 3)).toBe(-1);
});
