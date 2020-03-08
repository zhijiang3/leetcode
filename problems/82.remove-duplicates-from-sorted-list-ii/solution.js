import ListNode from "data-structure/ListNode";

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export default function deleteDuplicates(head) {
  const sentinel = new ListNode("head");
  sentinel.next = head;

  let prev = sentinel;
  while (head) {
    let node = head;
    while (node && node.next && node.val === node.next.val) node = node.next;

    if (node === head) prev = node;
    else prev.next = node.next;

    head = node.next;
  }

  return sentinel.next;
}
