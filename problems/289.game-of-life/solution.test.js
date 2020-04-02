import gameOfLife from "./solution.js";

test("example 1", () => {
  /* prettier-ignore */
  const input = [
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0]
  ];
  gameOfLife(input);
  expect(input).toEqual([
    [0, 0, 0],
    [1, 0, 1],
    [0, 1, 1],
    [0, 1, 0]
  ]);
});
