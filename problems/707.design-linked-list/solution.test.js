import MyLinkedList from "./solution.js";

function print(linkedList) {
  const result = [];

  linkedList = linkedList.head;
  while (linkedList) {
    result.push(linkedList.val);
    linkedList = linkedList.next;
  }

  return result.toString();
}

test("在链表头部添加", () => {
  const linkedList = new MyLinkedList();

  linkedList.addAtHead(1);

  expect(linkedList.head.val).toBe(1);
  expect(linkedList.tail.val).toBe(1);
  expect(print(linkedList)).toBe("1");

  linkedList.addAtHead(0);

  expect(linkedList.head.val).toBe(0);
  expect(linkedList.tail.val).toBe(1);
  expect(print(linkedList)).toBe("0,1");
});

test("在链表尾部添加", () => {
  const linkedList = new MyLinkedList();

  linkedList.addAtTail(1);

  expect(linkedList.head.val).toBe(1);
  expect(linkedList.tail.val).toBe(1);
  expect(print(linkedList)).toBe("1");

  linkedList.addAtTail(2);

  expect(linkedList.head.val).toBe(1);
  expect(linkedList.tail.val).toBe(2);
  expect(print(linkedList)).toBe("1,2");
});

test("删除第一个节点", () => {
  const linkedList = new MyLinkedList();

  linkedList.addAtTail(1);
  linkedList.addAtTail(2);
  linkedList.addAtTail(3);

  linkedList.deleteAtIndex(0);

  expect(linkedList.head.val).toBe(2);
  expect(linkedList.tail.val).toBe(3);
  expect(print(linkedList)).toBe("2,3");
});

test("删除中间节点", () => {
  const linkedList = new MyLinkedList();

  linkedList.addAtTail(1);
  linkedList.addAtTail(2);
  linkedList.addAtTail(3);

  linkedList.deleteAtIndex(1);

  expect(linkedList.head.val).toBe(1);
  expect(linkedList.tail.val).toBe(3);
  expect(print(linkedList)).toBe("1,3");
});

test("删除最后一个节点", () => {
  const linkedList = new MyLinkedList();

  linkedList.addAtTail(1);
  linkedList.addAtTail(2);
  linkedList.addAtTail(3);

  linkedList.deleteAtIndex(2);

  expect(linkedList.head.val).toBe(1);
  expect(linkedList.tail.val).toBe(2);
  expect(print(linkedList)).toBe("1,2");
});

test("删除无效的节点", () => {
  const linkedList = new MyLinkedList();

  linkedList.addAtTail(1);
  linkedList.addAtTail(2);
  linkedList.addAtTail(3);

  linkedList.deleteAtIndex(4);

  expect(linkedList.head.val).toBe(1);
  expect(linkedList.tail.val).toBe(3);
  expect(print(linkedList)).toBe("1,2,3");

  linkedList.deleteAtIndex(-1);

  expect(linkedList.head.val).toBe(1);
  expect(linkedList.tail.val).toBe(3);
  expect(print(linkedList)).toBe("1,2,3");
});

test("删除仅有的一个节点", () => {
  const linkedList = new MyLinkedList();

  linkedList.addAtHead(1);

  linkedList.deleteAtIndex(0);

  expect(linkedList.head).toBeNull();
  expect(linkedList.tail).toBeNull();
});

test("获取元素", () => {
  const linkedList = new MyLinkedList();

  linkedList.addAtTail(1);
  linkedList.addAtTail(2);

  expect(linkedList.get(-1)).toBe(-1);
  expect(linkedList.get(0)).toBe(1);
  expect(linkedList.get(1)).toBe(2);
  expect(linkedList.get(2)).toBe(-1);
});

test("添加第一个节点", () => {
  const linkedList = new MyLinkedList();

  linkedList.addAtIndex(0, 1);

  expect(linkedList.head.val).toBe(1);
  expect(linkedList.tail.val).toBe(1);
  expect(print(linkedList)).toBe("1");
});

test("只有一个节点时添加节点", () => {
  const linkedList = new MyLinkedList();

  linkedList.addAtHead(1);
  linkedList.addAtIndex(1, 2);

  expect(linkedList.head.val).toBe(1);
  expect(linkedList.tail.val).toBe(2);
  expect(print(linkedList)).toBe("1,2");
});

test("在链表中添加节点", () => {
  const linkedList = new MyLinkedList();

  linkedList.addAtHead(1);
  linkedList.addAtTail(3);

  linkedList.addAtIndex(1, 2);

  expect(linkedList.head.val).toBe(1);
  expect(linkedList.tail.val).toBe(3);
  expect(print(linkedList)).toBe("1,2,3");
});

test("添加最后一个节点", () => {
  const linkedList = new MyLinkedList();

  linkedList.addAtTail(1);
  linkedList.addAtTail(2);

  linkedList.addAtIndex(2, 3);

  expect(linkedList.head.val).toBe(1);
  expect(linkedList.tail.val).toBe(3);
  expect(print(linkedList)).toBe("1,2,3");
});

test("添加无效的节点", () => {
  const linkedList = new MyLinkedList();

  linkedList.addAtTail(1);
  linkedList.addAtTail(2);
  linkedList.addAtTail(3);

  linkedList.addAtIndex(4, 4);

  expect(linkedList.head.val).toBe(1);
  expect(linkedList.tail.val).toBe(3);
  expect(print(linkedList)).toBe("1,2,3");
});
