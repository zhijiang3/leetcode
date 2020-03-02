import TreeNode from "data-structure/TreeNode";
import ListNode from "data-structure/ListNode";

/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {TreeNode}
 */
function helper(nums, left, right) {
  if (left > right) return null;

  const mid = Math.floor((left + right) / 2);

  const node = new TreeNode(nums[mid]);
  node.left = helper(nums, left, mid - 1);
  node.right = helper(nums, mid + 1, right);

  return node;
}

/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
export default function sortedListToBST(head) {
  const nums = [];
  while (head) {
    nums.push(head.val);

    head = head.next;
  }

  return helper(nums, 0, nums.length - 1);
}
