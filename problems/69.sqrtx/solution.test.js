import mySqrt from "./solution.js";

test("example 1", () => {
  expect(mySqrt(4)).toBe(2);
});

test("example 2", () => {
  expect(mySqrt(8)).toBe(2);
});

test("example 3", () => {
  for (let i = 1; i <= 100000; i++) {
    expect(mySqrt(i)).toBe(Math.sqrt(i) | 0);
  }
});
