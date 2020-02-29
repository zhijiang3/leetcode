import removeElements from "./solution.js";
import ListNode from "data-structure/ListNode";

test("example 1", () => {
  const head = new ListNode(1);
  head.next = new ListNode(2);
  head.next.next = new ListNode(6);
  head.next.next.next = new ListNode(3);
  head.next.next.next.next = new ListNode(4);
  head.next.next.next.next.next = new ListNode(5);
  head.next.next.next.next.next.next = new ListNode(6);

  const node = removeElements(head, 6);

  expect(node.val).toBe(1);
  expect(node.next.val).toBe(2);
  expect(node.next.next.val).toBe(3);
  expect(node.next.next.next.val).toBe(4);
  expect(node.next.next.next.next.val).toBe(5);
  expect(node.next.next.next.next.next).toBeNull();
});

test("example 2", () => {
  const head = new ListNode(1);

  const node = removeElements(head, 1);
  expect(node).toBeNull();
});

test("example 3", () => {
  const head = new ListNode(1);
  head.next = new ListNode(1);

  const node = removeElements(head, 1);
  expect(node).toBeNull();
});

test("example 4", () => {
  const head = new ListNode(6);
  head.next = new ListNode(6);
  head.next.next = new ListNode(6);
  head.next.next.next = new ListNode(3);
  head.next.next.next.next = new ListNode(4);
  head.next.next.next.next.next = new ListNode(5);
  head.next.next.next.next.next.next = new ListNode(6);

  const node = removeElements(head, 6);

  expect(node.val).toBe(3);
  expect(node.next.val).toBe(4);
  expect(node.next.next.val).toBe(5);
  expect(node.next.next.next).toBeNull();
});

test("example 5", () => {
  const head = new ListNode(1);
  head.next = new ListNode(2);
  head.next.next = new ListNode(2);
  head.next.next.next = new ListNode(2);
  head.next.next.next.next = new ListNode(2);
  head.next.next.next.next.next = new ListNode(3);
  head.next.next.next.next.next.next = new ListNode(2);
  head.next.next.next.next.next.next.next = new ListNode(4);
  head.next.next.next.next.next.next.next.next = new ListNode(5);
  head.next.next.next.next.next.next.next.next.next = new ListNode(6);

  const node = removeElements(head, 2);

  expect(node.val).toBe(1);
  expect(node.next.val).toBe(3);
  expect(node.next.next.val).toBe(4);
  expect(node.next.next.next.val).toBe(5);
  expect(node.next.next.next.next.val).toBe(6);
  expect(node.next.next.next.next.next).toBeNull();
});

test("example 6", () => {
  expect(removeElements(null, 2)).toBeNull();
});

test("example 7", () => {
  const head = new ListNode(1);
  head.next = new ListNode(2);
  head.next.next = new ListNode(6);
  head.next.next.next = new ListNode(3);
  head.next.next.next.next = new ListNode(4);
  head.next.next.next.next.next = new ListNode(5);
  head.next.next.next.next.next.next = new ListNode(6);

  const node = removeElements(head, 8);

  expect(node.val).toBe(1);
  expect(node.next.val).toBe(2);
  expect(node.next.next.val).toBe(6);
  expect(node.next.next.next.val).toBe(3);
  expect(node.next.next.next.next.val).toBe(4);
  expect(node.next.next.next.next.next.val).toBe(5);
  expect(node.next.next.next.next.next.next.val).toBe(6);
  expect(node.next.next.next.next.next.next.next).toBeNull();
});
