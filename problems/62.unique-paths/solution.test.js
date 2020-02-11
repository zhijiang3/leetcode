import uniquePaths from "./solution.js";

test("example 1", () => {
  expect(uniquePaths(3, 2)).toBe(2);
});

test("example 2", () => {
  expect(uniquePaths(7, 3)).toBe(28);
});
