import maxProfit from "./solution.js";

test("example 1", () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
});

test("example 2", () => {
  expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
});
