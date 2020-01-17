import tictactoe from "./solution.js";

test("example 1", () => {
  expect(
    tictactoe([
      [0, 0],
      [2, 0],
      [1, 1],
      [2, 1],
      [2, 2]
    ])
  ).toBe("A");
});

test("example 2", () => {
  expect(
    tictactoe([
      [0, 0],
      [1, 1],
      [0, 1],
      [0, 2],
      [1, 0],
      [2, 0]
    ])
  ).toBe("B");
});

test("example 3", () => {
  expect(
    tictactoe([
      [0, 0],
      [1, 1],
      [2, 0],
      [1, 0],
      [1, 2],
      [2, 1],
      [0, 1],
      [0, 2],
      [2, 2]
    ])
  ).toBe("Draw");
});

test("example 4", () => {
  expect(
    tictactoe([
      [0, 0],
      [1, 1]
    ])
  ).toBe("Pending");
});

test("example 5", () => {
  expect(
    tictactoe([
      [2, 0],
      [1, 1],
      [0, 2],
      [2, 1],
      [1, 2],
      [1, 0],
      [0, 0],
      [0, 1]
    ])
  ).toBe("B");
});
