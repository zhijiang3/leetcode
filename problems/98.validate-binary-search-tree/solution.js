/**
 * @param {TreeNode} root
 * @return {boolean}
 */
export default function isValidBST(root) {
  let stack = [];
  let prevValue = -Infinity;

  while (stack.length || root) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop();

    if (root.val <= prevValue) return false;
    prevValue = root.val;

    root = root.right;
  }

  return true;
}
