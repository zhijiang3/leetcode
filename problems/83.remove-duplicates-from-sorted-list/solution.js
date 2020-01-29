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
export default function deleteDuplicates(head) {
  let firstEqualNode = head;
  let currNode = head && head.next;

  while (currNode) {
    if (firstEqualNode.val === currNode.val) {
      firstEqualNode.next = currNode.next;
    } else {
      firstEqualNode = currNode;
    }

    currNode = currNode.next;
  }

  return head;
}
