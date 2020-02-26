import ListNode from "data-structure/ListNode";

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export default function reverseList(head) {
  let prev = null;
  let next = null;
  while (head) {
    next = head.next;
    head.next = prev;

    prev = head;
    head = next;
  }

  return prev;
}
