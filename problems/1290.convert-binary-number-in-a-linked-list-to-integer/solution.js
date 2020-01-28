/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
export default function getDecimalValue(head) {
  let result = 0;

  while (head) {
    result = 2 * result + head.val;

    head = head.next;
  }

  return result;
}
