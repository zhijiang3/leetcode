import countPrimeSetBits from "./solution.js";

test("example 1", () => {
  expect(countPrimeSetBits(6, 10)).toBe(4);
});

test("example 2", () => {
  expect(countPrimeSetBits(10, 15)).toBe(5);
});
