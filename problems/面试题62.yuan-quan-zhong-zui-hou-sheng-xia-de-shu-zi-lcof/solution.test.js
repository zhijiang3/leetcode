import lastRemaining from "./solution.js";

test("example 1", () => {
  expect(lastRemaining(5, 3)).toBe(3);
});

test("example 2", () => {
  expect(lastRemaining(10, 17)).toBe(2);
});
