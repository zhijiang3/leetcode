import isSymmetric from "./solution.js";
import TreeNode from "data-structure/TreeNode.js";

test("example 1", () => {
  const root = new TreeNode(1);

  root.left = new TreeNode(2);
  root.left.left = new TreeNode(3);
  root.left.right = new TreeNode(4);

  root.right = new TreeNode(2);
  root.right.left = new TreeNode(4);
  root.right.right = new TreeNode(3);

  expect(isSymmetric(root)).toBe(true);
});

test("example 2", () => {
  const root = new TreeNode(1);

  root.left = new TreeNode(2);
  root.left.right = new TreeNode(3);

  root.right = new TreeNode(2);
  root.right.right = new TreeNode(3);

  expect(isSymmetric(root)).toBe(false);
});
