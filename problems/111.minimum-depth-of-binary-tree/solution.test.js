import minDepth from "./solution.js";
import TreeNode from "data-structure/TreeNode.js";

test("示例 1", () => {
  const root = new TreeNode(3);
  root.left = new TreeNode(9);
  root.right = new TreeNode(20);
  root.right.left = new TreeNode(15);
  root.right.right = new TreeNode(7);

  expect(minDepth(root)).toBe(2);
});

test("测试空值", () => {
  expect(minDepth(null)).toBe(0);
});

test("测试只有一边有节点", () => {
  const root = new TreeNode(3);
  root.left = new TreeNode(2);

  expect(minDepth(root)).toBe(2);
});
