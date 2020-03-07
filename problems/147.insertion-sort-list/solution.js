import ListNode from "data-structure/ListNode";

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export default function insertionSortList(head) {
  // 按升序排列的链表
  let sortedHead = null;
  while (head) {
    const next = head.next;

    // 插入到升序链表的头部
    if (sortedHead === null || head.val < sortedHead.val) {
      head.next = sortedHead;
      sortedHead = head;
    } else {
      // 找到新的值在升序链表中的位置
      let p = sortedHead;
      while (p.next && p.next.val < head.val) p = p.next;
      head.next = p.next;
      p.next = head;
    }

    head = next;
  }

  return sortedHead;
}
