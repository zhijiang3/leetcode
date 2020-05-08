import isPowerOfThree from "./solution.js";

test("example 1", () => {
  expect(isPowerOfThree(27)).toBe(true);
});

test("example 2", () => {
  expect(isPowerOfThree(0)).toBe(false);
});

test("example 3", () => {
  expect(isPowerOfThree(9)).toBe(true);
});

test("example 4", () => {
  expect(isPowerOfThree(45)).toBe(false);
});
