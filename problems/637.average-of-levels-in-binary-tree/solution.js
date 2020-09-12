function DFS(root, ans, level) {
  if (!root) return;

  ans[level] || (ans[level] = []);

  ans[level].push(root.val);
  if (root.left) DFS(root.left, ans, level + 1);
  if (root.right) DFS(root.right, ans, level + 1);
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
export default function averageOfLevels(root) {
  const ans = [];

  DFS(root, ans, 0);

  return ans.map(nums => {
    return nums.reduce((sum, num) => sum + num, 0) / nums.length;
  });
}
