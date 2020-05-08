import countPrimes from "./solution.js";

test("example 1", () => {
  expect(countPrimes(10)).toBe(4);
});

test("example 2", () => {
  expect(countPrimes(25)).toBe(9);
});
