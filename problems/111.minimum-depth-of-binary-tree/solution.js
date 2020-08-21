/**
 * @param {TreeNode} node
 * @return {boolean}
 */
function isLeaf(node) {
  return !node.left && !node.right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
export default function minDepth(root) {
  if (!root) return 0;

  let minDepth = Infinity;
  const stack = [];

  stack.push([root, 1]);

  while (stack.length) {
    const [node, depth] = stack.pop();

    if (isLeaf(node)) minDepth = Math.min(minDepth, depth);

    if (depth > minDepth) continue; /** 剪枝，比当前最小的还要大，那么不需要再深入了 */
    if (node.right) stack.push([node.right, depth + 1]);
    if (node.left) stack.push([node.left, depth + 1]);
  }

  return minDepth;
}
