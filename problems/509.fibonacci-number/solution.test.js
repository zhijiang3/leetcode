import fib from "./solution.js";

test("example 1", () => {
  expect(fib(2)).toBe(1);
});

test("example 2", () => {
  expect(fib(3)).toBe(2);
});

test("example 3", () => {
  expect(fib(4)).toBe(3);
});
