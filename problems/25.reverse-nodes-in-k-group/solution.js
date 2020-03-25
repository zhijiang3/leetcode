import ListNode from "data-structure/ListNode";

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head, k) {
  let node = head;
  let next,
    prev = null;
  while (k--) {
    next = node.next;

    node.next = prev;
    prev = node;

    node = next;
  }

  return {
    head: prev,
    tail: head,
    next
  };
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
export default function reverseKGroup(head, k) {
  const front = new ListNode("front");

  let size = 0;
  let node = head;
  while (node) {
    // 保存新的头节点
    if (++size === k) front.next = node;

    node = node.next;
  }
  // 计算需要反转的次数
  size = Math.floor(size / k);

  let prevTail = head;
  for (let i = 0; i < size; ++i) {
    const list = reverseList(head, k);

    // 调整反转后的指向
    prevTail.next = list.head;
    prevTail = list.tail;
    // 从反转前的下一个节点开始，继续反转
    head = list.next;
  }
  // 修正剩余节点的指向
  prevTail.next = head;

  return front.next;
}
