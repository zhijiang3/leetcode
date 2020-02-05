/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
export default function invertTree(root) {
  if (!root) return root;

  const enqueue = [];

  enqueue.push(root);

  while (enqueue.length) {
    const treeNode = enqueue.shift();
    const { left, right } = treeNode;

    treeNode.left = right;
    treeNode.right = left;

    if (left) enqueue.push(left);
    if (right) enqueue.push(right);
  }

  return root;
}
