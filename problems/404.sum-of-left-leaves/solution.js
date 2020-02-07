/**
 * @param {TreeNode} root
 * @return {number}
 */
export default function sumOfLeftLeaves(root) {
  if (!root) return 0;

  let sum = 0;
  const queue = [];
  queue.push(root);
  while (queue.length) {
    const node = queue.shift();

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);

    if (node.left && !node.left.left && !node.left.right) {
      sum += node.left.val;
    }
  }

  return sum;
}
