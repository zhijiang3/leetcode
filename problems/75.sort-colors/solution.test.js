import sortColors from "./solution.js";

test("example 1", () => {
  const arr = [2, 0, 2, 1, 1, 0];
  sortColors(arr);
  expect(arr).toEqual([0, 0, 1, 1, 2, 2]);
});

test("example 2", () => {
  const arr = [2, 0, 1];
  sortColors(arr);
  expect(arr).toEqual([0, 1, 2]);
});
