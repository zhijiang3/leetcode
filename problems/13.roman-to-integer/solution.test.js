import romanToInt from "./solution.js";

test("example 1", () => {
  expect(romanToInt("III")).toBe(3);
});

test("example 2", () => {
  expect(romanToInt("IV")).toBe(4);
});

test("example 3", () => {
  expect(romanToInt("IX")).toBe(9);
});

test("example 4", () => {
  expect(romanToInt("LVIII")).toBe(58);
});

test("example 5", () => {
  expect(romanToInt("MCMXCIV")).toBe(1994);
});
