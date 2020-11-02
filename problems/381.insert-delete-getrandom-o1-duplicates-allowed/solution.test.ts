import RandomizedCollection from "./solution";

function checkInnerValid(collection: RandomizedCollection, expectAnswer: number[]) {
  const map = new Map<number, Set<number>>();

  for (let i = 0; i < expectAnswer.length; ++i) {
    const num = expectAnswer[i];

    if (map.has(num)) {
      map.get(num).add(i);
    } else {
      map.set(num, new Set([i]));
    }
  }

  expect(collection.nums).toEqual(expectAnswer);
  expect(collection.map).toEqual(map);
}

test("示例", () => {
  const collection = new RandomizedCollection();

  expect(collection.insert(1)).toBe(true);
  expect(collection.insert(1)).toBe(false);
  expect(collection.insert(2)).toBe(true);
  checkInnerValid(collection, [1, 1, 2]);

  expect(collection.remove(1)).toBe(true);
  checkInnerValid(collection, [2, 1]);
});

test("删除末尾", () => {
  const collection = new RandomizedCollection();

  expect(collection.insert(1)).toBe(true);
  expect(collection.insert(2)).toBe(true);
  expect(collection.insert(3)).toBe(true);
  expect(collection.insert(4)).toBe(true);
  checkInnerValid(collection, [1, 2, 3, 4]);

  expect(collection.remove(4)).toBe(true);
  expect(collection.remove(4)).toBe(false);
  expect(collection.remove(3)).toBe(true);
  checkInnerValid(collection, [1, 2]);

  expect(collection.insert(3)).toBe(true);
  expect(collection.insert(4)).toBe(true);
  expect(collection.insert(3)).toBe(false);
  expect(collection.insert(4)).toBe(false);
  checkInnerValid(collection, [1, 2, 3, 4, 3, 4]);

  expect(collection.remove(4)).toBe(true);
  checkInnerValid(collection, [1, 2, 3, 4, 3]);
});

test("删除开头", () => {
  const collection = new RandomizedCollection();

  expect(collection.insert(1)).toBe(true);
  expect(collection.insert(1)).toBe(false);
  expect(collection.insert(2)).toBe(true);
  expect(collection.insert(2)).toBe(false);
  expect(collection.insert(3)).toBe(true);
  expect(collection.insert(3)).toBe(false);
  expect(collection.insert(4)).toBe(true);
  expect(collection.insert(4)).toBe(false);
  checkInnerValid(collection, [1, 1, 2, 2, 3, 3, 4, 4]);

  expect(collection.remove(1)).toBe(true);
  expect(collection.remove(1)).toBe(true);
  expect(collection.remove(1)).toBe(false);
  checkInnerValid(collection, [4, 4, 2, 2, 3, 3]);
});

test("删除中间", () => {
  const collection = new RandomizedCollection();

  expect(collection.insert(1)).toBe(true);
  expect(collection.insert(1)).toBe(false);
  expect(collection.insert(2)).toBe(true);
  expect(collection.insert(2)).toBe(false);
  expect(collection.insert(3)).toBe(true);
  expect(collection.insert(3)).toBe(false);
  expect(collection.insert(4)).toBe(true);
  expect(collection.insert(4)).toBe(false);
  checkInnerValid(collection, [1, 1, 2, 2, 3, 3, 4, 4]);

  expect(collection.remove(3)).toBe(true);
  expect(collection.remove(2)).toBe(true);
  checkInnerValid(collection, [1, 1, 4, 2, 4, 3]);

  expect(collection.remove(4)).toBe(true);
  checkInnerValid(collection, [1, 1, 4, 2, 3]);

  expect(collection.remove(2)).toBe(true);
  checkInnerValid(collection, [1, 1, 4, 3]);

  expect(collection.remove(1)).toBe(true);
  expect(collection.remove(2)).toBe(false);
  checkInnerValid(collection, [3, 1, 4]);
});


test("删除只有一个索引的", () => {
  const collection = new RandomizedCollection();

  expect(collection.insert(1)).toBe(true);
  expect(collection.insert(2)).toBe(true);
  expect(collection.insert(1)).toBe(false);
  checkInnerValid(collection, [1, 2, 1]);

  expect(collection.remove(2)).toBe(true);
  checkInnerValid(collection, [1, 1]);
});
