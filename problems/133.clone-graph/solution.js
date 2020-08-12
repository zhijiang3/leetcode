import Node from "data-structure/GraphNode";

/**
 * @param {Node} node
 * @param {Map} visited
 * @return {Node}
 */
function cloneNode(node, visited) {
  if (visited.has(node)) return visited.get(node);

  const newNode = new Node(node.val);
  visited.set(node, newNode);
  node.neighbors.forEach(neighborNode => {
    newNode.neighbors.push(cloneNode(neighborNode, visited));
  });

  return newNode;
}

/**
 * @param {Node} node
 * @return {Node}
 */
export default function cloneGraph(node) {
  if (!node) return node;

  return cloneNode(node, new Map());
}
