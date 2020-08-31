import updateBoard from "./solution.js";

test("示例 1", () => {
  /* prettier-ignore */
  const board = [
    ["E", "E", "E", "E", "E"],
    ["E", "E", "M", "E", "E"],
    ["E", "E", "E", "E", "E"],
    ["E", "E", "E", "E", "E"]
  ];
  expect(updateBoard(board, [3, 0])).toEqual([
    ["B", "1", "E", "1", "B"],
    ["B", "1", "M", "1", "B"],
    ["B", "1", "1", "1", "B"],
    ["B", "B", "B", "B", "B"]
  ]);
});

test("示例 2", () => {
  /* prettier-ignore */
  const board = [
    ["B", "1", "E", "1", "B"],
    ["B", "1", "M", "1", "B"],
    ["B", "1", "1", "1", "B"],
    ["B", "B", "B", "B", "B"]
  ];
  expect(updateBoard(board, [1, 2])).toEqual([
    ["B", "1", "E", "1", "B"],
    ["B", "1", "X", "1", "B"],
    ["B", "1", "1", "1", "B"],
    ["B", "B", "B", "B", "B"]
  ]);
});
