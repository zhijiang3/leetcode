import ListNode from "data-structure/ListNode";

/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
export default function reverseBetween(head, m, n) {
  if (!head) return head;

  // 使用一个前驱节点
  const front = new ListNode("front");
  front.next = head;

  let i;
  // 保留上一个节点的指针
  let frontPrev = front;
  let node = head;
  for (i = 1; i < m; i++) {
    frontPrev = node;
    node = node.next;
  }

  let reversePrev = null;
  for (i = m; i <= n; i++) {
    const next = node.next;

    // 翻转链表
    node.next = reversePrev;

    // 修改指针
    reversePrev = node;
    node = next;
  }

  // frontPrev.next.next 是反转之后的最后一个节点
  // node 是最后一个反转的节点的下一个节点
  frontPrev.next.next = node;
  // reversePrev 是反转后节点的头节点指针
  frontPrev.next = reversePrev;

  return front.next;
}
