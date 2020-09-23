import ListNode from "data-structure/ListNode";
import TreeNode from "data-structure/TreeNode";

export function treeToArray<T>(root?: TreeNode<T>): T[] {
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

export function listToArray<T>(head: ListNode<T>): T[] {
  const arr = [];

  while (head) {
    arr.push(head.val);

    head = head.next;
  }

  return arr;
}

export function arrayToList<T>(arr: T[]): ListNode<T> {
  const head = new ListNode<T>(null);

  let node = head;
  for (let n of arr) {
    node.next = new ListNode(n);
    node = node.next;
  }

  return head.next;
}
