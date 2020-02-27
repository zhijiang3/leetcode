import ListNode from "data-structure/ListNode";

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
export default function reorderList(head) {
  // 找到中间节点
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // 反转从中间到链表末尾的节点
  let prev = null;
  let tail = slow;
  while (tail) {
    const next = tail.next;
    tail.next = prev;
    prev = tail;
    tail = next;
  }

  // 合并两个链表
  let node = head;
  while (prev) {
    const headNext = node.next;
    const tailNext = prev.next;

    if (prev !== headNext) prev.next = headNext;
    if (node !== prev) node.next = prev;

    node = headNext;
    prev = tailNext;
  }

  return head;
}
