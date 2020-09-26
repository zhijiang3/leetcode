import findMode from "./solution";
import TreeNode from "data-structure/TreeNode";

test("示例", () => {
  const root = new TreeNode(1);
  root.right = new TreeNode(2);
  root.right.left = new TreeNode(2);

  expect(findMode(root)).toEqual([2]);
});

test("多个众数", () => {
  const root = new TreeNode(1);
  root.left = new TreeNode(1);
  root.right = new TreeNode(2);
  root.right.left = new TreeNode(2);

  const output = findMode(root);
  output.sort();
  const expectOutput = [1, 2];
  expectOutput.sort();
  expect(output).toEqual(expectOutput);
});

test("空值", () => {
  expect(findMode(null)).toEqual([]);
});

test("均与分布", () => {
  const root = new TreeNode(4);
  root.left = new TreeNode(2);
  root.left.left = new TreeNode(1);
  root.left.right = new TreeNode(3);
  root.right = new TreeNode(6);
  root.right.left = new TreeNode(5);
  root.right.right = new TreeNode(7);

  const output = findMode(root);
  output.sort();
  const expectOutput = [1, 2, 3, 4, 5, 6, 7];
  expectOutput.sort();
  expect(output).toEqual(expectOutput);
});

test("节点所有值都一致", () => {
  const root = new TreeNode(1);
  root.left = new TreeNode(1);
  root.right = new TreeNode(1);

  expect(findMode(root)).toEqual([1]);
});
