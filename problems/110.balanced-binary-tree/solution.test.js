import isBalanced from "./solution.js";
import TreeNode from "data-structure/TreeNode";

test("example 1", () => {
  const root = new TreeNode(3);

  root.left = new TreeNode(9);
  root.right = new TreeNode(20);

  root.right.left = new TreeNode(15);
  root.right.right = new TreeNode(7);

  expect(isBalanced(root)).toBe(true);
});

test("example 2", () => {
  const root = new TreeNode(1);

  root.left = new TreeNode(2);
  root.right = new TreeNode(2);

  root.left.left = new TreeNode(3);
  root.left.right = new TreeNode(3);

  root.left.left.left = new TreeNode(4);
  root.left.left.right = new TreeNode(4);

  expect(isBalanced(root)).toBe(false);
});

test("空值", () => {
  expect(isBalanced(null)).toBe(true);
});
