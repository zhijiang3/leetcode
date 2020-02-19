import isPowerOfFour from "./solution.js";

test("example 1", () => {
  expect(isPowerOfFour(16)).toBe(true);
});

test("example 2", () => {
  expect(isPowerOfFour(5)).toBe(false);
});

test("example 3", () => {
  expect(isPowerOfFour(8)).toBe(false);
});

test("example 4", () => {
  expect(isPowerOfFour(-64)).toBe(false);
});
