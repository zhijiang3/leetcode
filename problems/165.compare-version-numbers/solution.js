/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
export default function compareVersion(version1, version2) {
  let i = 0;
  let j = 0;

  const NUMBERS_REG = /[0-9]/;
  while (i < version1.length || j < version2.length) {
    let num1 = "0";
    while (i < version1.length && NUMBERS_REG.test(version1[i])) {
      num1 += version1[i++];
    }
    num1 = Number(num1);
    let num2 = "0";
    while (j < version2.length && NUMBERS_REG.test(version2[j])) {
      num2 += version2[j++];
    }
    num2 = Number(num2);
    if (num1 < num2) {
      return -1;
    } else if (num1 > num2) {
      return 1;
    } else {
      i++;
      j++;
    }
  }

  return 0;
}
