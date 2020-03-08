import ListNode from "data-structure/ListNode";

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
