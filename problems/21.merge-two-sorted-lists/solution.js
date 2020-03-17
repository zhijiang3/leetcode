import ListNode from "data-structure/ListNode";

/**
 * @param {ListNode} head1
 * @param {ListNode} head2
 * @return {ListNode}
 */
export default function mergeTwoLists(head1, head2) {
  const front = new ListNode("front");

  let node = front;
  while (head1 && head2) {
    if (head1.val > head2.val) {
      node.next = head2;
      head2 = head2.next;
    } else {
      node.next = head1;
      head1 = head1.next;
    }

    node = node.next;
  }
  node.next = head1 ? head1 : head2;

  return front.next;
}
