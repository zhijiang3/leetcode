import TreeNode from "data-structure/TreeNode";

export default function mergeTrees(t1: TreeNode<number>, t2: TreeNode<number>): TreeNode<number> {
  if (t1 === null) return t2;
  if (t2 === null) return t1;

  const merged = new TreeNode(t1.val + t2.val);
  merged.left = mergeTrees(t1.left, t2.left);
  merged.right = mergeTrees(t1.right, t2.right);

  return merged;
}
