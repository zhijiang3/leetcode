/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export default function oddEvenList(head) {
  if (!head) return head;

  let oddNode = head;
  let evenNode = head.next;
  let evenHeadNode = evenNode;

  while (evenNode && evenNode.next) {
    oddNode.next = evenNode.next;
    oddNode = oddNode.next;
    evenNode.next = oddNode.next;
    evenNode = evenNode.next;
  }
  oddNode.next = evenHeadNode;

  return head;
}
