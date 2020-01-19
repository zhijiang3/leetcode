/**
 * @param {number} num
 * @return {string}
 */
export default function convertToBase7(num) {
  let str = "";

  const flag = num < 0;
  if (flag) {
    num = -num;
  }

  do {
    str = (num % 7) + str;

    num = (num / 7) | 0;
  } while (num);

  return flag ? `-${str}` : str;
}
