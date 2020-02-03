import checkPerfectNumber from "./solution.js";

test("example 1", () => {
  expect(checkPerfectNumber(28)).toBe(true);
});

test("example 2", () => {
  expect(checkPerfectNumber(6)).toBe(true);
});

test("example 3", () => {
  expect(checkPerfectNumber(153)).toBe(false);
});
