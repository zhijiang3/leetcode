/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
export default function dayOfTheWeek(day, month, year) {
  if (month === 1 || month === 2) {
    month += 12;
    year--;
  }

  const learYearCount = Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400);

  const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return dayOfWeek[(day + 2 * month + Math.floor((3 * (month + 1)) / 5) + year + learYearCount + 1) % 7];
}
