import ListNode from "data-structure/ListNode";

export default function removeNthFromEnd(head: ListNode<number>, n: number): ListNode<number> {
  const front = new ListNode(0);
  front.next = head;

  let slow = front, fast = head;
  while (n--) fast = fast.next;

  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;

  return front.next;
}
