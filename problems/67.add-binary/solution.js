/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
export default function addBinary(a, b) {
  let i = a.length;
  let j = b.length;
  let result = "";
  let carry = 0;

  while (i > -1 || j > -1 || carry) {
    let b1 = a[--i] || "0";
    let b2 = b[--j] || "0";

    if (b1 === "1") ++carry;
    if (b2 === "1") ++carry;

    result = (carry % 2) + result;

    carry = Math.floor(carry / 2);
  }

  return result;
}
