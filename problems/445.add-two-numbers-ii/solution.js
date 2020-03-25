import ListNode from "data-structure/ListNode";

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
export default function addTwoNumbers(l1, l2) {
  const stack1 = [],
    stack2 = [];
  while (l1) {
    stack1.push(l1);
    l1 = l1.next;
  }
  while (l2) {
    stack2.push(l2);

    l2 = l2.next;
  }

  let carry = 0;
  let node = null,
    prev = null;
  while (stack1.length || stack2.length || carry) {
    if (stack1.length) {
      carry += stack1.pop().val;
    }
    if (stack2.length) {
      carry += stack2.pop().val;
    }

    node = new ListNode(carry % 10);

    node.next = prev;
    prev = node;

    carry = Math.floor(carry / 10);
  }

  return prev;
}
