import isPalindrome from "./solution.js";

test("example 1", () => {
  expect(isPalindrome(121)).toBe(true);
});

test("example 2", () => {
  expect(isPalindrome(-121)).toBe(false);
});

test("example 3", () => {
  expect(isPalindrome(10)).toBe(false);
});
