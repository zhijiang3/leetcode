import nextLargerNodes from "./solution.js";
import ListNode from "data-structure/ListNode";

test("example 1", () => {
  const head = new ListNode(2);
  head.next = new ListNode(1);
  head.next.next = new ListNode(5);

  expect(nextLargerNodes(head)).toEqual([5, 5, 0]);
});

test("example 2", () => {
  const head = new ListNode(2);
  head.next = new ListNode(7);
  head.next.next = new ListNode(4);
  head.next.next.next = new ListNode(3);
  head.next.next.next.next = new ListNode(5);

  expect(nextLargerNodes(head)).toEqual([7, 0, 5, 5, 0]);
});

test("example 3", () => {
  const head = new ListNode(1);
  head.next = new ListNode(7);
  head.next.next = new ListNode(5);
  head.next.next.next = new ListNode(1);
  head.next.next.next.next = new ListNode(9);
  head.next.next.next.next.next = new ListNode(2);
  head.next.next.next.next.next.next = new ListNode(5);
  head.next.next.next.next.next.next.next = new ListNode(1);

  expect(nextLargerNodes(head)).toEqual([7, 9, 9, 9, 0, 5, 0, 0]);
});
