import sortArray from "./solution.js";

test("example 1", () => {
  expect(sortArray([5, 2, 3, 1])).toEqual([1, 2, 3, 5]);
});

test("example 2", () => {
  expect(sortArray([5, 1, 1, 2, 0, 0])).toEqual([0, 0, 1, 1, 2, 5]);
});
