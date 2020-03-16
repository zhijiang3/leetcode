import ListNode from "data-structure/ListNode";

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
export default function partition(head, x) {
  const lessFront = new ListNode("front");
  const greaterFront = new ListNode("front");

  let lessNode = lessFront;
  let greaterNode = greaterFront;
  let node = head;
  while (node) {
    if (node.val >= x) {
      greaterNode.next = node;
      greaterNode = greaterNode.next;
    } else {
      lessNode.next = node;
      lessNode = lessNode.next;
    }

    node = node.next;
  }
  greaterNode.next = null;
  lessNode.next = greaterFront.next;

  return lessFront.next;
}
