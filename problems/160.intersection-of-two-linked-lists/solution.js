/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
export default function getIntersectionNode(headA, headB) {
  let pointA = headA;
  let pointB = headB;

  while (pointA !== null || pointB !== null) {
    if (pointA === pointB) return pointA;

    pointA = !pointA ? headB : pointA.next;
    pointB = !pointB ? headA : pointB.next;
  }

  return null;
}
