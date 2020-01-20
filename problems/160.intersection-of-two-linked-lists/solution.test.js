import getIntersectionNode from "./solution.js";
import ListNode from "data-structure/ListNode";

test("example 1", () => {
  const headA = new ListNode(4);
  const headB = new ListNode(5);

  const intersectionNode = new ListNode(8);
  intersectionNode.next = new ListNode(4);
  intersectionNode.next.next = new ListNode(5);

  headA.next = new ListNode(1);
  headA.next.next = intersectionNode;

  headB.next = new ListNode(0);
  headB.next.next = new ListNode(1);
  headB.next.next.next = intersectionNode;

  expect(getIntersectionNode(headA, headB).val).toBe(8);
});

test("example 2", () => {
  const headA = new ListNode(0);
  const headB = new ListNode(3);

  const intersectionNode = new ListNode(2);
  intersectionNode.next = new ListNode(4);

  headA.next = new ListNode(9);
  headA.next.next = new ListNode(1);
  headA.next.next = intersectionNode;

  headB.next = intersectionNode;

  expect(getIntersectionNode(headA, headB).val).toBe(2);
});

test("example 3", () => {
  const headA = new ListNode(2);
  headA.next = new ListNode(6);
  headA.next.next = new ListNode(4);

  const headB = new ListNode(1);
  headB.next = new ListNode(5);

  expect(getIntersectionNode(headA, headB)).toBeNull();
});

test("example 4", () => {
  const headA = new ListNode(2);
  headA.next = new ListNode(6);
  headA.next.next = new ListNode(4);

  const headB = new ListNode(2);
  headB.next = new ListNode(6);
  headB.next.next = new ListNode(4);

  expect(getIntersectionNode(headA, headB)).toBeNull();
});

test("example 5", () => {
  const headA = new ListNode(4);
  const headB = new ListNode(5);

  const intersectionNode = new ListNode(8);
  intersectionNode.next = new ListNode(4);
  intersectionNode.next.next = new ListNode(5);

  headA.next = new ListNode(1);
  headA.next.next = new ListNode(9);
  headA.next.next.next = intersectionNode;

  headB.next = new ListNode(0);
  headB.next.next = new ListNode(1);
  headB.next.next.next = intersectionNode;

  expect(getIntersectionNode(headA, headB).val).toBe(8);
});
