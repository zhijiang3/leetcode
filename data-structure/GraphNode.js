/**
 * @param {number} val
 * @return {GraphNode}
 */
export default function GraphNode(val, neighbors = []) {
  this.val = val;
  this.neighbors = neighbors;
}
