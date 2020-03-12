/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
function gcd(num1, num2) {
  while (num2) {
    const prev = num1;
    num1 = num2;
    num2 = prev % num2;
  }

  return num1;
}

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
export default function gcdOfStrings(str1, str2) {
  if (str1 + str2 !== str2 + str1) return "";

  return str1.substring(0, gcd(str1.length, str2.length));
}
