import longestPalindrome from "./solution.js";

test("example 1", () => {
  expect(longestPalindrome("abccccdd")).toBe(7);
});

test("example 2", () => {
  expect(longestPalindrome("abcccdddddaaaasdsdaxczcdd")).toBe(21);
});
