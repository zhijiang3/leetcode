import isPalindrome from "./solution.js";
import ListNode from "data-structure/ListNode.js";

test("example 1", () => {
  const head = new ListNode(1);
  head.next = new ListNode(2);

  expect(isPalindrome(head)).toBe(false);
});

test("example 2", () => {
  const head = new ListNode(1);
  head.next = new ListNode(2);
  head.next.next = new ListNode(2);
  head.next.next.next = new ListNode(1);

  expect(isPalindrome(head)).toBe(true);
});
