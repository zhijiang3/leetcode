import myPow from "./solution.js";

test("example 1", () => {
  expect(myPow(2.0, 10)).toBe(1024.0);
});

test("example 2", () => {
  expect(myPow(2.1, 3)).toBe(9.261);
});

test("example 3", () => {
  expect(myPow(2.0, -2)).toBe(0.25);
});
