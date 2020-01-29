/**
 * @param {ListNode} head
 * @return {boolean}
 */
export default function hasCycle(head) {
  let slowPointer = head;
  let fastPointer = head && head.next;

  while (fastPointer && slowPointer) {
    if (fastPointer === slowPointer) return true;

    fastPointer = fastPointer.next ? fastPointer.next.next : fastPointer.next;
    slowPointer = slowPointer.next;
  }

  return false;
}
