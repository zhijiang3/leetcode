/**
 * @param {date} string
 * @return {number}
 */
export default function dayOfYear(string) {
  const year = Number(date[0] + date[1] + date[2] + date[3]);
  const isLearYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  const month = Number(date[5] + date[6]);

  let day = Number(date[8] + date[9]);
  const months = [31, isLearYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  for (let m = 0; m < month - 1; m++) {
    day += months[m];
  }

  return day;
}
