/**
 * @param {*} val
 * @param {Node} prev
 * @param {Node} next
 * @param {Node} child
 * @return {Node}
 */
export default function Node(val, prev = null, next = null, child = null) {
  this.val = val;

  /** @var {Node} */
  this.prev = prev;

  /** @var {Node} */
  this.next = next;

  /** @var {Node} */
  this.child = child;
}
