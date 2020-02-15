/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
export default function getSum(a, b) {
  while (b) {
    const carry = (a & b) << 1;

    a = a ^ b;
    b = carry;
  }

  return a;
}
