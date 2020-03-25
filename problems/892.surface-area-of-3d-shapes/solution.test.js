import surfaceArea from "./solution.js";

test("example 1", () => {
  /* prettier-ignore */
  expect(surfaceArea([
    [2]
  ])).toBe(10);
});

test("example 2", () => {
  /* prettier-ignore */
  expect(surfaceArea([
    [1, 2],
    [3, 4]
  ])).toBe(34);
});

test("example 3", () => {
  /* prettier-ignore */
  expect(surfaceArea([
    [1, 0],
    [0, 2]
  ])).toBe(16);
});

test("example 4", () => {
  /* prettier-ignore */
  expect(surfaceArea([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
  ])).toBe(32);
});

test("example 5", () => {
  /* prettier-ignore */
  expect(surfaceArea([
    [2, 2, 2],
    [2, 1, 2],
    [2, 2, 2]
  ])).toBe(46);
});
