import convertBst from "./solution.js";
import TreeNode from "data-structure/TreeNode";
import { treeToArray } from "shared/utils.js";

test("示例", () => {
  const root = new TreeNode(5);
  root.left = new TreeNode(2);
  root.right = new TreeNode(13);

  const output = convertBst(root);

  expect(treeToArray(output)).toEqual([18, 20, 13]);
});

test("多个节点", () => {
  const root = new TreeNode(4);
  root.left = new TreeNode(2);
  root.left.left = new TreeNode(1);
  root.left.right = new TreeNode(3);
  root.right = new TreeNode(6);
  root.right.left = new TreeNode(5);
  root.right.right = new TreeNode(7);

  const output = convertBst(root);

  expect(treeToArray(output)).toEqual([22, 27, 13, 28, 25, 18, 7]);
});
