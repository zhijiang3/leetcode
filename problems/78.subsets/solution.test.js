import subsets from "./solution.js";

test("示例", () => {
  const output = subsets([1, 2, 3]);
  output.sort();
  const expectOutput = [[3], [1], [2], [1, 2, 3], [1, 3], [2, 3], [1, 2], []];
  expectOutput.sort();
  expect(output).toEqual(expectOutput);
});

test("空值", () => {
  expect(subsets([])).toEqual([[]]);
});

test("四个值", () => {
  const output = subsets([1, 2, 3, 4]);
  output.sort();
  const expectOutput = [
    [],
    [1],
    [2],
    [1, 2],
    [3],
    [1, 3],
    [2, 3],
    [1, 2, 3],
    [4],
    [1, 4],
    [2, 4],
    [1, 2, 4],
    [3, 4],
    [1, 3, 4],
    [2, 3, 4],
    [1, 2, 3, 4]
  ];
  expectOutput.sort();
  expect(output).toEqual(expectOutput);
});
