import TreeNode from "data-structure/TreeNode";
import ListNode from "data-structure/ListNode";

/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
export default function sortedListToBST(head) {
  let count = 0;
  let node = head;

  while (node) {
    count++;
    node = node.next;
  }

  /**
   * @param {ListNode} head
   * @param {number} left
   * @param {number} right
   * @return {TreeNode}
   */
  function helper(left, right) {
    if (left > right) return null;

    const mid = Math.floor((left + right) / 2);

    // 递归形成左半部分
    const leftNode = helper(left, mid - 1);

    // 左半边的节点处理完成后，处理当前节点
    const node = new TreeNode(head.val);
    node.left = leftNode;
    head = head.next;

    // 递归完成右半部分
    node.right = helper(mid + 1, right);

    return node;
  }

  return helper(0, count - 1);
}
