import canMeasureWater from "./solution.js";

test("example 1", () => {
  expect(canMeasureWater(3, 5, 4)).toBe(true);
});

test("example 2", () => {
  expect(canMeasureWater(2, 6, 5)).toBe(false);
});
