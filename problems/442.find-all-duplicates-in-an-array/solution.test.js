import findDuplicates from "./solution.js";

test("example 1", () => {
  expect(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([2, 3]);
});
