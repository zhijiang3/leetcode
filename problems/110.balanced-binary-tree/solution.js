/**
 * @param {TreeNode} root
 * @return {boolean}
 */
export default function isBalanced(root) {
  let ans = true;

  /**
   * @param {TreeNode} root
   * @param {number} height
   * @return {boolean}
   */
  function postOrder(root, height) {
    if (!root) return height;

    const leftHeight = postOrder(root.left, height + 1);
    const rightHeight = postOrder(root.right, height + 1);

    if (ans) ans = Math.abs(leftHeight - rightHeight) <= 1;

    return Math.max(leftHeight, rightHeight);
  }

  postOrder(root, 1);

  return ans;
}
