import maxDistance from "./solution.js";

test("example 1", () => {
  /* prettier-ignore */
  expect(maxDistance([
    [1, 0, 1],
    [0, 0, 0],
    [1, 0, 1]
  ])).toBe(2);
});

test("example 2", () => {
  /* prettier-ignore */
  expect(maxDistance([
    [1, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ])).toBe(4);
});

test("example 3", () => {
  /* prettier-ignore */
  expect(maxDistance([
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1]
  ])).toBe(-1);
});

test("example 4", () => {
  /* prettier-ignore */
  expect(maxDistance([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ])).toBe(-1);
});

test("example 5", () => {
  /* prettier-ignore */
  expect(maxDistance([
    [0, 0, 1, 1, 1],
    [0, 1, 1, 0, 0],
    [0, 0, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 0, 0, 1]
  ])).toBe(2);
});
