import canConstruct from "./solution.js";

test("example 1", () => {
  expect(canConstruct("a", "b")).toBe(false);
});

test("example 2", () => {
  expect(canConstruct("aa", "ab")).toBe(false);
});

test("example 3", () => {
  expect(canConstruct("aa", "aab")).toBe(true);
});

test("example 4", () => {
  expect(canConstruct("aa", "abcdefgha")).toBe(true);
});
