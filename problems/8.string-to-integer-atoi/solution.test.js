import myAtoi from "./solution.js";

test("example 1", () => {
  expect(myAtoi("42")).toBe(42);
});

test("example 2", () => {
  expect(myAtoi("   -42")).toBe(-42);
});

test("example 3", () => {
  expect(myAtoi("4193 with words")).toBe(4193);
});

test("example 4", () => {
  expect(myAtoi("words and 987")).toBe(0);
});

test("example 5", () => {
  expect(myAtoi("-91283472332")).toBe(-2147483648);
});

test("example 6", () => {
  expect(myAtoi("91283472332")).toBe(2147483647);
});

test("example 7", () => {
  expect(myAtoi("")).toBe(0);
});

test("example 8", () => {
  expect(myAtoi("   ")).toBe(0);
});

test("example 9", () => {
  expect(myAtoi("  - ")).toBe(0);
});

test("example 10", () => {
  expect(myAtoi("  -23asd ")).toBe(-23);
});

test("example 11", () => {
  expect(myAtoi("  -words and 987 ")).toBe(0);
});

test("example 12", () => {
  expect(myAtoi("  321321  5")).toBe(321321);
});
