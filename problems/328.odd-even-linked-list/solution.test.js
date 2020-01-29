import oddEvenList from "./solution.js";
import ListNode from "data-structure/ListNode";

/**
 * @param {ListNode} head
 * @return {number[]}
 */
function toArray(head) {
  const result = [];

  while (head) {
    result.push(head.val);
    head = head.next;
  }

  return result;
}

test("example 1", () => {
  const head = new ListNode(1);
  head.next = new ListNode(2);
  head.next.next = new ListNode(3);
  head.next.next.next = new ListNode(4);
  head.next.next.next.next = new ListNode(5);

  expect(toArray(oddEvenList(head))).toEqual([1, 3, 5, 2, 4]);
});

test("example 2", () => {
  const head = new ListNode(2);
  head.next = new ListNode(1);
  head.next.next = new ListNode(3);
  head.next.next.next = new ListNode(5);
  head.next.next.next.next = new ListNode(6);
  head.next.next.next.next.next = new ListNode(4);
  head.next.next.next.next.next.next = new ListNode(7);

  expect(toArray(oddEvenList(head))).toEqual([2, 3, 6, 7, 1, 5, 4]);
});
