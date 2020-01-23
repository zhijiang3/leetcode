import isSubsequence from "./solution.js";

test("example 1", () => {
  expect(isSubsequence("abc", "ahbgdc")).toBe(true);
});

test("example 2", () => {
  expect(isSubsequence("axc", "ahbgdc")).toBe(false);
});
