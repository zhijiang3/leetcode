import strStr from "./solution.js";

test("example 1", () => {
  expect(strStr("hello", "ll")).toBe(2);
});

test("example 2", () => {
  expect(strStr("aaaaa", "bba")).toBe(-1);
});

test("example 3", () => {
  expect(strStr("aaaaa", "")).toBe(0);
});
