/**
 * @param {ListNode} head
 * @return {boolean}
 */
export default function isPalindrome(head) {
  // 查找中间元素
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // 从中间开始反转链表
  let prev = null;
  while (slow) {
    const next = slow.next;

    slow.next = prev;
    prev = slow;

    slow = next;
  }

  // 对比开头和结尾的值是否一致
  while (prev) {
    if (prev.val !== head.val) return false;

    prev = prev.next;
    head = head.next;
  }

  return true;
}
