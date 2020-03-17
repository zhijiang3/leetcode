import ListNode from "data-structure/ListNode";

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export default function swapPairs(head) {
  if (!head || !head.next) return head;

  const front = new ListNode("front");

  let prev = front;
  let curr = head;
  let next = head.next;
  while (next) {
    prev.next = next;
    curr.next = next.next;
    next.next = curr;

    prev = curr;
    curr = curr.next;
    next = curr ? curr.next : null;
  }

  return front.next;
}
