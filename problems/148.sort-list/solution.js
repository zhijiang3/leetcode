import ListNode from "data-structure/ListNode";

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export default function sortList(head) {
  if (!head || !head.next) return head;

  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  const next = slow.next;
  slow.next = null;

  let left = sortList(head);
  let right = sortList(next);

  const front = new ListNode("front");
  let node = front;
  while (left && right) {
    if (left.val < right.val) {
      node.next = left;
      left = left.next;
    } else {
      node.next = right;
      right = right.next;
    }
    node = node.next;
  }
  node.next = left ? left : right;

  return front.next;
}
