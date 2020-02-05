import invertTree from "./solution.js";
import TreeNode from "data-structure/TreeNode";

/**
 * @param {TreeNode} root
 * @return {*[]}
 */
function toArray(root) {
  if (!root) return [];

  const result = [];

  const enqueue = [];
  enqueue.push(root);
  while (enqueue.length) {
    const tree = enqueue.shift();

    result.push(tree.val);

    if (tree.left) enqueue.push(tree.left);
    if (tree.right) enqueue.push(tree.right);
  }

  return result;
}

test("example 1", () => {
  const root = new TreeNode(4);
  root.left = new TreeNode(2);
  root.right = new TreeNode(7);
  root.left.left = new TreeNode(1);
  root.left.right = new TreeNode(3);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(9);

  invertTree(root);

  expect(toArray(root)).toEqual([4, 7, 2, 9, 6, 3, 1]);
});
