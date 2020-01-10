import myPow from './50.powx-n';

test("example 1", () => {
  expect(myPow(2.00000, 10)).toBe(1024.00000);
});

test("example 2", () => {
  expect(myPow(2.10000, 3)).toBe(9.26100);
});

test("example 3", () => {
  expect(myPow(2.00000, -2)).toBe(0.25000);
});
