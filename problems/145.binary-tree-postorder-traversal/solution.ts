import TreeNode from "data-structure/TreeNode";

export default function postorderTraversal(root: TreeNode<number>): number[] {
  if (!root) return [];

  const ans = [];
  const stack = [];
  let prev;

  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (root.right && root.right !== prev) {
      stack.push(root);
      root = root.right;
    } else {
      prev = root;
      root = null; // 避免再进循环时重复查找左子节点
      ans.push(root.val);
    }
  }

  return ans;
}
