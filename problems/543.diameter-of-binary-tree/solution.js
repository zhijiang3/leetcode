import TreeNode from "data-structure/TreeNode";

/**
 * @param {TreeNode} root
 * @return {number}
 */
export default function diameterOfBinaryTree(root) {
  let max = 1;

  /**
   * @param {TreeNode} root
   * @return {number}
   */
  function helper(root) {
    if (!root) return 0;

    const leftDepth = helper(root.left);
    const rightDepth = helper(root.right);

    max = Math.max(max, leftDepth + rightDepth + 1);

    return Math.max(leftDepth, rightDepth) + 1;
  }

  helper(root);

  return max - 1;
}
