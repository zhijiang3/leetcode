import ListNode from "data-structure/ListNode.js";

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
export default function addTwoNumbers(l1, l2) {
  const head = new ListNode("head");

  let newList = head;
  let carry = 0;

  while (l1 || l2 || carry) {
    const sum = carry + (l1 ? l1.val : 0) + (l2 ? l2.val : 0);

    newList.next = new ListNode(sum % 10);
    carry = (sum / 10) | 0;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
    newList = newList.next;
  }

  return head.next;
}
