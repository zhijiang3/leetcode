import numPairsDivisibleBy60 from "./solution.js";

test("example 1", () => {
  expect(numPairsDivisibleBy60([30, 20, 150, 100, 40])).toBe(3);
});

test("example 2", () => {
  expect(numPairsDivisibleBy60([60, 60, 60])).toBe(3);
});
