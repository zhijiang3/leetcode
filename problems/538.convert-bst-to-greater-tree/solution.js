/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
export default function convertBst(root) {
  let sum = 0;

  function inOrder(root) {
    if (!root) return;

    inOrder(root.right);
    sum += root.val;
    root.val = sum;
    inOrder(root.left);
  }

  inOrder(root);

  return root;
}
