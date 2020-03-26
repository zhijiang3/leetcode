import Node from "data-structure/Node";

/**
 * @param {Node} head
 * @return {Node}
 */
export default function flatten(head) {
  if (!head) return head;

  // front 的下一个节点指向 head
  const front = new Node("front", null, head, null);
  const stack = [];

  stack.push(head);

  let prev = front;
  while (stack.length) {
    const curr = stack.pop();

    prev.next = curr;
    curr.prev = prev;

    if (curr.next) stack.push(curr.next);

    // child 在 next 之后追加，那么会先遍历 child 的元素
    if (curr.child) {
      stack.push(curr.child);
      curr.child = null;
    }

    prev = curr;
  }
  // 清理 front 的指向
  front.next.prev = null;

  return front.next;
}
