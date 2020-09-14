import inorderTraversal from "./solution.js";
import TreeNode from "data-structure/TreeNode";

test("示例 1", () => {
  const root = new TreeNode(1);
  root.right = new TreeNode(2);
  root.right.left = new TreeNode(3);
  expect(inorderTraversal(root)).toEqual([1, 3, 2]);
});

test("右子树的左节点优先遍历", () => {
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(7);
  root.right.left.left = new TreeNode(8);
  root.right.left.right = new TreeNode(9);
  root.right.left.left.left = new TreeNode(10);
  expect(inorderTraversal(root)).toEqual([4, 2, 5, 1, 10, 8, 6, 9, 3, 7]);
});
