import diameterOfBinaryTree from "./solution.js";
import TreeNode from "data-structure/TreeNode.js";

test("example 1", () => {
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);

  expect(diameterOfBinaryTree(root)).toBe(3);
});
