import sortedListToBST from "./solution.js";
import TreeNode from "data-structure/TreeNode";
import ListNode from "data-structure/ListNode";

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
  const head = new ListNode(-10);
  head.next = new ListNode(-3);
  head.next.next = new ListNode(0);
  head.next.next.next = new ListNode(5);
  head.next.next.next.next = new ListNode(9);

  const rootNode = sortedListToBST(head);

  BreadthFirstSearch(rootNode, node => {
    const [leftHeight, rightHeight] = getTreeNodeHeight(node);

    if (node.left) expect(node.val).toBeGreaterThanOrEqual(node.left.val);
    if (node.right) expect(node.val).toBeLessThanOrEqual(node.right.val);

    expect(Math.abs(leftHeight - rightHeight)).toBeLessThanOrEqual(1);
  });
});

test("example 2", () => {
  const head = new ListNode(0);
  head.next = new ListNode(1);
  head.next.next = new ListNode(2);
  head.next.next.next = new ListNode(3);
  head.next.next.next.next = new ListNode(4);
  head.next.next.next.next.next = new ListNode(5);

  const rootNode = sortedListToBST(head);

  BreadthFirstSearch(rootNode, node => {
    const [leftHeight, rightHeight] = getTreeNodeHeight(node);

    if (node.left) expect(node.val).toBeGreaterThanOrEqual(node.left.val);
    if (node.right) expect(node.val).toBeLessThanOrEqual(node.right.val);

    expect(Math.abs(leftHeight - rightHeight)).toBeLessThanOrEqual(1);
  });
});

test("example 3", () => {
  const rootNode = sortedListToBST();

  expect(rootNode).toBe(null);
});
