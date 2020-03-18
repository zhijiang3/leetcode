import ListNode from "data-structure/ListNode";

/**
 * @param {ListNode} head1
 * @param {ListNode} head2
 * @return {ListNode}
 */
function mergeTwoLists(head1, head2) {
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

/**
 * @param {ListNode[]} lists
 * @param {number} start
 * @param {number} end
 * @return {ListNode}
 */
function merge(lists, start, end) {
  if (start > end) return null;
  else if (start === end) return lists[end];

  const mid = Math.floor((start + end) / 2);

  return mergeTwoLists(merge(lists, start, mid), merge(lists, mid + 1, end));
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
export default function mergeKLists(lists) {
  return merge(lists, 0, lists.length - 1);
}
