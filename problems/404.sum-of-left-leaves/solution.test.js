import sumOfLeftLeaves from "./solution.js";
import TreeNode from "data-structure/TreeNode";

test("example 1", () => {
  const root = new TreeNode(3);
  root.left = new TreeNode(9);
  root.right = new TreeNode(20);
  root.right.left = new TreeNode(15);
  root.right.right = new TreeNode(7);

  expect(sumOfLeftLeaves(root)).toBe(24);
});

test("example 2", () => {
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);

  expect(sumOfLeftLeaves(root)).toBe(4);
});

test("example 3", () => {
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);

  expect(sumOfLeftLeaves(root)).toBe(2);
});

test("example 4", () => {
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.right = new TreeNode(4);
  root.right.right = new TreeNode(5);

  expect(sumOfLeftLeaves(root)).toBe(0);
});

test("example 5", () => {
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.right = new TreeNode(4);
  root.left.right.left = new TreeNode(5);
  root.right.right = new TreeNode(6);

  expect(sumOfLeftLeaves(root)).toBe(5);
});

test("example 6", () => {
  const root = new TreeNode(1);

  expect(sumOfLeftLeaves(root)).toBe(0);
});
