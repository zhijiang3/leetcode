import getDecimalValue from "./solution.js";
import ListNode from "data-structure/ListNode";

test("example 1", () => {
  const node = new ListNode(1);
  node.next = new ListNode(0);
  node.next.next = new ListNode(1);

  expect(getDecimalValue(node)).toBe(5);
});

test("example 2", () => {
  const node = new ListNode(0);

  expect(getDecimalValue(node)).toBe(0);
});

test("example 3", () => {
  const node = new ListNode(1);

  expect(getDecimalValue(node)).toBe(1);
});

test("example 4", () => {
  const head = new ListNode("head");

  let node = head;
  [1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0].forEach(num => {
    node.next = new ListNode(num);
    node = node.next;
  });

  expect(getDecimalValue(head.next)).toBe(18880);
});

test("example 5", () => {
  const node = new ListNode(0);
  node.next = new ListNode(0);

  expect(getDecimalValue(node)).toBe(0);
});
