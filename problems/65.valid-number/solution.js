/**
 * @param {string} s
 * @return {boolean}
 */
export default function isNumber(s) {
  return /^(\s+)?[-+]?(\d+\.?|(?:\d+)?\.\d+)(e[-+]?\d+)?(\s+)?$/.test(s);
}
