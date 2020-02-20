import TreeNode from "data-structure/TreeNode";

/**
 * @param {number[]} nums
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
function helper(nums, low, high) {
  // 数组无法再分
  if (low > high) return null;

  // 取中间的树
  const mid = Math.floor((low + high) / 2);

  // 构造根节点
  const node = new TreeNode(nums[mid]);
  // 拆分左半边放到左子树
  node.left = helper(nums, low, mid - 1);
  // 拆分右半边放到右子树
  node.right = helper(nums, mid + 1, high);

  return node;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
export default function sortedArrayToBst(nums) {
  return helper(nums, 0, nums.length - 1);
}
