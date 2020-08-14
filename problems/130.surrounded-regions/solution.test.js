import solve from "./solution.js";

test("example", () => {
  const input = [
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "X", "X"]
  ];

  solve(input);

  expect(input).toEqual([
    ["X", "X", "X", "X"],
    ["X", "X", "X", "X"],
    ["X", "X", "X", "X"],
    ["X", "O", "X", "X"]
  ]);
});

test("空区域", () => {
  const input = [];

  solve(input);

  expect(input).toEqual([]);
});

test("与边界相邻的", () => {
  const input = [
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "O", "X"]
  ];

  solve(input);

  expect(input).toEqual([
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "O", "X"]
  ]);
});
