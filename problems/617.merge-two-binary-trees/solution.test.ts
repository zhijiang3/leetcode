import mergeTrees from "./solution";
import TreeNode from "data-structure/TreeNode";
import { treeToArray } from "shared/utils";

test("示例", () => {
  const t1 = new TreeNode(1);
  t1.left = new TreeNode(3);
  t1.right = new TreeNode(2);
  t1.left.left = new TreeNode(5);

  const t2 = new TreeNode(2);
  t2.left = new TreeNode(1);
  t2.left.right = new TreeNode(4);
  t2.right = new TreeNode(3);
  t2.right.right = new TreeNode(7);

  const output = treeToArray( mergeTrees(t1, t2) );

  expect(output).toEqual([3, 4, 5, 5, 4, 7]);
});
