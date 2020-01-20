import addTwoNumbers from "./solution.js";
import ListNode from "data-structure/ListNode";

function toArray(ll) {
  const arr = [];

  while (ll) {
    arr.push(ll.val);

    ll = ll.next;
  }

  return arr;
}

test("example 1", () => {
  const l1 = new ListNode(2);
  l1.next = new ListNode(4);
  l1.next.next = new ListNode(3);

  const l2 = new ListNode(5);
  l2.next = new ListNode(6);
  l2.next.next = new ListNode(4);

  expect(toArray(addTwoNumbers(l1, l2))).toEqual([7, 0, 8]);
});

test("正确计算长度不同的链表", () => {
  const l1 = new ListNode(2);
  l1.next = new ListNode(4);

  const l2 = new ListNode(5);
  l2.next = new ListNode(4);
  l2.next.next = new ListNode(6);

  expect(toArray(addTwoNumbers(l1, l2))).toEqual([7, 8, 6]);
});

test("正确计算进位", () => {
  const l1 = new ListNode(9);
  l1.next = new ListNode(9);
  l1.next.next = new ListNode(9);

  const l2 = new ListNode(9);
  l2.next = new ListNode(9);
  l2.next.next = new ListNode(9);

  expect(toArray(addTwoNumbers(l1, l2))).toEqual([8, 9, 9, 1]);
});
