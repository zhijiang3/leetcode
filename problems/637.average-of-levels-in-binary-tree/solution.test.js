import averageOfLevels from "./solution.js";
import TreeNode from "data-structure/TreeNode.js";

test("example 1", () => {
  const root = new TreeNode(3);
  root.left = new TreeNode(9);
  root.right = new TreeNode(20);
  root.right.left = new TreeNode(15);
  root.right.right = new TreeNode(7);

  expect(averageOfLevels(root)).toEqual([3, 14.5, 11]);
});
