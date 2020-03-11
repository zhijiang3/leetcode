import canThreePartsEqualSum from "./solution.js";

test("example 1", () => {
  expect(canThreePartsEqualSum([0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1])).toBe(true);
});

test("example 2", () => {
  expect(canThreePartsEqualSum([0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1])).toBe(false);
});

test("example 3", () => {
  expect(canThreePartsEqualSum([3, 3, 6, 5, -2, 2, 5, 1, -9, 4])).toBe(true);
});

test("example 4", () => {
  expect(canThreePartsEqualSum([10, -10, 10, -10, 10, -10, 10, -10])).toBe(true);
});

test("example 5", () => {
  expect(canThreePartsEqualSum([1, -1, 1, -1])).toBe(false);
});
