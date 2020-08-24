import rangeBitwiseAnd from "./solution.js";

test("example 1", () => {
  expect(rangeBitwiseAnd(5, 7)).toBe(4);
});

test("example 2", () => {
  expect(rangeBitwiseAnd(0, 1)).toBe(0);
});
