import peakIndexInMountainArray from "./solution.js";

test("example 1", () => {
  expect(peakIndexInMountainArray([0, 1, 0])).toBe(1);
});

test("example 2", () => {
  expect(peakIndexInMountainArray([0, 2, 1, 0])).toBe(1);
});

test("example 3", () => {
  expect(peakIndexInMountainArray([1, 3, 5, 2, 6, 4])).toBe(4);
});
