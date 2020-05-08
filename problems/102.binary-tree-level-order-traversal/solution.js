/**
 * @param {TreeNode} root
 * @param {number} depth
 * @param {number[][]} arr
 */
function preOrder(root, depth, arr) {
  if (!root) return;

  if (!arr[depth]) arr[depth] = [];
  arr[depth].push(root.val);

  preOrder(root.left, depth + 1, arr);
  preOrder(root.right, depth + 1, arr);
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
export default function levelOrder(root) {
  const ans = [];

  preOrder(root, 0, ans);

  return ans;
}
