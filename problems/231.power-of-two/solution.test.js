import isPowerOfTwo from "./solution.js";

test("example 1", () => {
  expect(isPowerOfTwo(1)).toBe(true);
});

test("example 2", () => {
  expect(isPowerOfTwo(16)).toBe(true);
});

test("example 3", () => {
  expect(isPowerOfTwo(218)).toBe(false);
});

test("example 4", () => {
  expect(isPowerOfTwo(-16)).toBe(false);
});
