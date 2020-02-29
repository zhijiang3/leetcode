import ListNode from "data-structure/ListNode";

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
export default function removeElements(head, val) {
  const newHead = new ListNode("head");
  newHead.next = head;

  let prev = newHead;
  while (head) {
    if (head.val === val) {
      prev.next = head.next;
    } else {
      prev = head;
    }

    head = head.next;
  }

  return newHead.next;
}
