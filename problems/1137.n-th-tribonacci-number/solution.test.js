import tribonacci from "./solution.js";

test("example 1", () => {
  expect(tribonacci(4)).toBe(4);
});

test("example 2", () => {
  expect(tribonacci(25)).toBe(1389537);
});
