import findContinuousSequence from "./solution.js";

test("example 1", () => {
  expect(findContinuousSequence(9)).toEqual([
    [2, 3, 4],
    [4, 5]
  ]);
});

test("example 2", () => {
  expect(findContinuousSequence(15)).toEqual([
    [1, 2, 3, 4, 5],
    [4, 5, 6],
    [7, 8]
  ]);
});

test("example 3", () => {
  expect(findContinuousSequence(1)).toEqual([]);
});

test("example 4", () => {
  expect(findContinuousSequence(2)).toEqual([]);
});

test("example 5", () => {
  expect(findContinuousSequence(3)).toEqual([[1, 2]]);
});
