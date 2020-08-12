import Node from "data-structure/GraphNode";
import cloneGraph from "./solution.js";

test("example 1", () => {
  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);
  const node4 = new Node(4);

  node1.neighbors.push(node2, node4);
  node2.neighbors.push(node1, node3);
  node3.neighbors.push(node2, node4);
  node4.neighbors.push(node1, node3);

  const cloneNode1 = cloneGraph(node1);
  const cloneNode2 = cloneNode1.neighbors[0];
  const cloneNode3 = cloneNode2.neighbors[1];
  const cloneNode4 = cloneNode1.neighbors[1];

  expect(cloneNode1 instanceof Node).toBe(true);
  expect(cloneNode2 instanceof Node).toBe(true);
  expect(cloneNode3 instanceof Node).toBe(true);
  expect(cloneNode4 instanceof Node).toBe(true);

  expect(cloneNode1 !== node1).toBe(true);
  expect(cloneNode2 !== node2).toBe(true);
  expect(cloneNode3 !== node3).toBe(true);
  expect(cloneNode4 !== node4).toBe(true);

  expect(cloneNode1.neighbors.length).toBe(2);
  expect(cloneNode2.neighbors.length).toBe(2);
  expect(cloneNode3.neighbors.length).toBe(2);
  expect(cloneNode4.neighbors.length).toBe(2);

  expect(cloneNode1.neighbors[0] === cloneNode2).toBe(true);
  expect(cloneNode1.neighbors[1] === cloneNode4).toBe(true);
  expect(cloneNode2.neighbors[0] === cloneNode1).toBe(true);
  expect(cloneNode2.neighbors[1] === cloneNode3).toBe(true);
  expect(cloneNode3.neighbors[0] === cloneNode2).toBe(true);
  expect(cloneNode3.neighbors[1] === cloneNode4).toBe(true);
  expect(cloneNode4.neighbors[0] === cloneNode1).toBe(true);
  expect(cloneNode4.neighbors[1] === cloneNode3).toBe(true);
});

test("example 2", () => {
  const node1 = new Node(1);

  const cloneNode1 = cloneGraph(node1);

  expect(cloneNode1 instanceof Node).toBe(true);

  expect(cloneNode1 !== node1).toBe(true);

  expect(cloneNode1.neighbors.length).toBe(0);
});

test("example 3", () => {
  expect(cloneGraph(null)).toBeNull();
});

test("example 4", () => {
  const node1 = new Node(1);
  const node2 = new Node(2);

  node1.neighbors.push(node2);
  node2.neighbors.push(node1);

  const cloneNode1 = cloneGraph(node1);
  const cloneNode2 = cloneNode1.neighbors[0];

  expect(cloneNode1 instanceof Node).toBe(true);
  expect(cloneNode2 instanceof Node).toBe(true);

  expect(cloneNode1 !== node1).toBe(true);
  expect(cloneNode2 !== node2).toBe(true);

  expect(cloneNode1.neighbors.length).toBe(1);
  expect(cloneNode2.neighbors.length).toBe(1);

  expect(cloneNode1.neighbors[0] === cloneNode2).toBe(true);
  expect(cloneNode2.neighbors[0] === cloneNode1).toBe(true);
});
