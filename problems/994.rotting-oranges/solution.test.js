import orangesRotting from "./solution.js";

test("example 1", () => {
  /* prettier-ignore */
  expect(orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1]
  ])).toBe(4);
});

test("example 2", () => {
  /* prettier-ignore */
  expect(orangesRotting([
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1]
  ])).toBe(-1);
});

test("example 3", () => {
  /* prettier-ignore */
  expect(orangesRotting([
    [0, 2]
  ])).toBe(0);
});

test("example 4", () => {
  /* prettier-ignore */
  expect(orangesRotting([
    [0, 1]
  ])).toBe(-1);
});

test("example 5", () => {
  /* prettier-ignore */
  expect(orangesRotting([
    [0, 0],
    [2, 0],
    [1, 2]
  ])).toBe(1);
});

test("example 6", () => {
  /* prettier-ignore */
  expect(orangesRotting([
    [1, 2]
  ])).toBe(1);
});

test("example 7", () => {
  /* prettier-ignore */
  expect(orangesRotting([
    [0, 2, 2]
  ])).toBe(0);
});

test("example 8", () => {
  /* prettier-ignore */
  expect(orangesRotting([
    [2, 2, 2, 1, 1]
  ])).toBe(2);
});

test("example 9", () => {
  /* prettier-ignore */
  expect(orangesRotting([
    [1],
    [2],
    [1],
    [1]
  ])).toBe(2);
});
