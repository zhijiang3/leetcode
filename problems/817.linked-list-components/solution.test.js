import numComponents from "./solution.js";
import ListNode from "data-structure/ListNode";

test("example 1", () => {
  const head = new ListNode(0);
  head.next = new ListNode(1);
  head.next.next = new ListNode(2);
  head.next.next.next = new ListNode(3);

  expect(numComponents(head, [0, 1, 3])).toBe(2);
});

test("example 2", () => {
  const head = new ListNode(0);
  head.next = new ListNode(1);
  head.next.next = new ListNode(2);
  head.next.next.next = new ListNode(3);
  head.next.next.next.next = new ListNode(4);

  expect(numComponents(head, [0, 3, 1, 4])).toBe(2);
});

test("example 3", () => {
  const head = new ListNode(0);
  head.next = new ListNode(2);
  head.next.next = new ListNode(2);
  head.next.next.next = new ListNode(2);
  head.next.next.next.next = new ListNode(4);
  head.next.next.next.next.next = new ListNode(5);

  expect(numComponents(head, [2])).toBe(1);
});

test("example 4", () => {
  const head = new ListNode(0);

  expect(numComponents(head, [])).toBe(0);
});

test("example 5", () => {
  const head = new ListNode(0);
  head.next = new ListNode(2);
  head.next.next = new ListNode(2);
  head.next.next.next = new ListNode(2);
  head.next.next.next.next = new ListNode(4);
  head.next.next.next.next.next = new ListNode(2);

  expect(numComponents(head, [2])).toBe(2);
});
