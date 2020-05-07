import isValidBST from "./solution.js";
import TreeNode from "data-structure/TreeNode.js";

test("example 1", () => {
  const root = new TreeNode(2);
  root.left = new TreeNode(1);
  root.right = new TreeNode(3);

  expect(isValidBST(root)).toBe(true);
});

test("example 2", () => {
  const root = new TreeNode(5);
  root.left = new TreeNode(1);
  root.right = new TreeNode(4);
  root.right.left = new TreeNode(3);
  root.right.right = new TreeNode(6);

  expect(isValidBST(root)).toBe(false);
});

test("example 3", () => {
  const root = new TreeNode(5);
  root.left = new TreeNode(1);
  root.right = new TreeNode(8);
  root.left.left = new TreeNode(2);
  root.left.right = new TreeNode(3);

  expect(isValidBST(root)).toBe(false);
});

test("example 4", () => {
  const root = new TreeNode(5);
  root.left = new TreeNode(1);
  root.right = new TreeNode(8);
  root.left.left = new TreeNode(0);
  root.left.right = new TreeNode(9);

  expect(isValidBST(root)).toBe(false);
});
