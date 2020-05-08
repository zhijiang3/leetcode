import levelOrder from "./solution.js";
import TreeNode from "data-structure/TreeNode.js";

test("example 1", () => {
  const root = new TreeNode(3);
  root.left = new TreeNode(9);
  root.right = new TreeNode(20);
  root.right.left = new TreeNode(15);
  root.right.right = new TreeNode(7);

  expect(levelOrder(root)).toEqual([
    /* prettier-ignore */
    [3],
    [9, 20],
    [15, 7]
  ]);
});
