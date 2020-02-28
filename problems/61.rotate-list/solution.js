import ListNode from "data-structure/ListNode";
import { iif } from "rxjs";

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
export default function rotateRight(head, k) {
  if (!head || !head.next) return head;

  let len = 1;
  let oldTail = head;
  while (oldTail.next) {
    len++;
    oldTail = oldTail.next;
  }
  oldTail.next = head;

  len = len - (k % len) - 1;
  let newTail = head;
  while (len) {
    newTail = newTail.next;
    len--;
  }
  head = newTail.next;

  newTail.next = null;

  return head;
}
