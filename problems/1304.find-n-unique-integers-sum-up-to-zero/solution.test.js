import sumZero from "./solution.js";

/**
 * @param {number[]} arr
 * @return {number}
 */
function calcSum(arr) {
  return arr.reduce((sum, n) => (sum += n), 0);
}

/**
 * @param {number[]} arr
 * @return {boolean}
 */
function checkUnique(arr) {
  const d = {};

  for (let i = 0; i < arr.length; i++) {
    if (d[arr[i]]) return false;

    d[arr[i]] = true;
  }

  return true;
}

test("example 1", () => {
  const uniqueIntArr = sumZero(5);

  expect(uniqueIntArr.length).toBe(5);
  expect(checkUnique(uniqueIntArr)).toBe(true);
  expect(calcSum(uniqueIntArr)).toBe(0);
});

test("example 2", () => {
  const uniqueIntArr = sumZero(3);

  expect(uniqueIntArr.length).toBe(3);
  expect(checkUnique(uniqueIntArr)).toBe(true);
  expect(calcSum(uniqueIntArr)).toBe(0);
});

test("example 3", () => {
  const uniqueIntArr = sumZero(1);

  expect(uniqueIntArr.length).toBe(1);
  expect(checkUnique(uniqueIntArr)).toBe(true);
  expect(calcSum(uniqueIntArr)).toBe(0);
});

test("1 ~ 1000", () => {
  for (let i = 1; i <= 1000; i++) {
    const uniqueIntArr = sumZero(i);

    expect(uniqueIntArr.length).toBe(i);
    expect(checkUnique(uniqueIntArr)).toBe(true);
    expect(calcSum(uniqueIntArr)).toBe(0);
  }
});
