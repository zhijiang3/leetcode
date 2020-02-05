/**
 * @param {*} val
 * @return {TreeNode}
 */
export default function TreeNode(val) {
  this.val = val;

  /** @var {TreeNode} */
  this.left = this.right = null;
}
