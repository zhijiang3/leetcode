import ListNode from "data-structure/ListNode";
import TreeNode from "data-structure/TreeNode";

/**
 * @param {TreeNode} root
 * @return {[]}
 */
export function treeToArray(root) {
  if (!root) return [];

  const arr = [];

  const stack = [root];
  while (stack.length) {
    root = stack.shift();

    arr.push(root.val);
    if (root.left) stack.push(root.left);
    if (root.right) stack.push(root.right);
  }

  return arr;
}

/**
 * @param {ListNode} head
 * @return {number[]}
 */
export function listToArray(head) {
  const arr = [];

  while (head) {
    arr.push(head.val);

    head = head.next;
  }

  return arr;
}

/**
 * @param {number[]} arr
 * @return {ListNode}
 */
export function arrayToList(arr) {
  const head = new ListNode("head");

  let node = head;
  for (let n of arr) {
    node.next = new ListNode(n);
    node = node.next;
  }

  return head.next;
}
