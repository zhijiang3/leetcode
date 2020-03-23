import getLeastNumbers from "./solution.js";

test("example 1", () => {
  const output = getLeastNumbers([3, 2, 1], 2);

  expect(output.slice().sort((b, a) => b - a)).toEqual([1, 2]);
});

test("example 2", () => {
  const output = getLeastNumbers([0, 1, 2, 1], 1);

  expect(output.slice().sort((b, a) => b - a)).toEqual([0]);
});

test("example 3", () => {
  /* prettier-ignore */
  const output = getLeastNumbers([0, 1, 2, 3, 4, 0, 3, 3, 8, 1, 4, 6, 2, 8, 8, 15, 10, 0, 9, 9, 1, 2, 17, 8, 17, 25, 18, 18, 16, 13, 18, 29, 2, 3, 32, 2, 26, 23, 18, 8, 34, 8, 11, 36, 36, 39, 46, 30, 21, 25, 21, 14, 41, 10, 31, 55, 45, 16, 33, 47, 4, 52, 59, 60, 1, 43, 42, 10, 12, 56, 12, 27, 22, 52, 38, 12, 41, 42, 71, 5, 42, 76, 8, 3, 31, 65, 11, 29, 28, 68, 33, 50, 73, 87, 22, 68, 31, 1, 38, 89], 60);

  /* prettier-ignore */
  expect(output.slice().sort((b, a) => b - a)).toEqual([0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 5, 6, 8, 8, 8, 8, 8, 8, 8, 9, 9, 10, 10, 10, 11, 11, 12, 12, 12, 13, 14, 15, 16, 16, 17, 17, 18, 18, 18, 18, 21, 21, 22, 22, 23, 25, 25, 26, 27]);
});
