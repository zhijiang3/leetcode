import minIncrementForUnique from "./solution.js";

test("example 1", () => {
  expect(minIncrementForUnique([1, 2, 2])).toBe(1);
});

test("example 2", () => {
  expect(minIncrementForUnique([3, 2, 1, 2, 1, 7])).toBe(6);
});
