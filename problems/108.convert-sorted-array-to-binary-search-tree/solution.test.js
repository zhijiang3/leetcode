import sortedArrayToBst from "./solution.js";
import TreeNode from "data-structure/TreeNode";

/**
 * @param {TreeNode} node
 * @return {number[]}
 */
function getTreeNodeHeight(node) {
  if (!node) return [-1, -1];

  return [getTreeNodeHeight(node.left)[0] + 1, getTreeNodeHeight(node.right)[1] + 1];
}

/**
 * @param {TreeNode} rootNode
 * @param {(node: TreeNode) => {}} callback
 */
function BreadthFirstSearch(rootNode, callback) {
  const stack = [];
  stack.push(rootNode);

  while (stack.length) {
    const node = stack.pop();

    callback(node);

    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
}

test("example 1", () => {
  const rootNode = sortedArrayToBst([-10, -3, 0, 5, 9]);

  BreadthFirstSearch(rootNode, node => {
    const [leftHeight, rightHeight] = getTreeNodeHeight(node);

    expect(Math.abs(leftHeight - rightHeight)).toBeLessThanOrEqual(1);
  });
});

test("example 2", () => {
  const rootNode = sortedArrayToBst([0, 1, 2, 3, 4, 5]);

  BreadthFirstSearch(rootNode, node => {
    const [leftHeight, rightHeight] = getTreeNodeHeight(node);

    expect(Math.abs(leftHeight - rightHeight)).toBeLessThanOrEqual(1);
  });
});

test("example 3", () => {
  const rootNode = sortedArrayToBst([]);

  expect(rootNode).toBe(null);
});
