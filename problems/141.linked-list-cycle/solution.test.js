import hasCycle from "./solution.js";
import ListNode from "data-structure/ListNode";

test("example 1", () => {
  const head = new ListNode(3);
  head.next = new ListNode(2);
  head.next.next = new ListNode(0);
  head.next.next.next = new ListNode(-4);
  // -4.next = 2
  head.next.next.next.next = head.next;

  expect(hasCycle(head)).toBe(true);
});

test("example 2", () => {
  const head = new ListNode(1);
  head.next = new ListNode(2);
  // 2.next = 1
  head.next = head;

  expect(hasCycle(head)).toBe(true);
});

test("example 3", () => {
  const head = new ListNode(1);

  expect(hasCycle(head)).toBe(false);
});

test("example 4", () => {
  expect(hasCycle()).toBe(false);
});
