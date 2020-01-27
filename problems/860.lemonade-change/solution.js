/**
 * @param {number[]} bills
 * @return {boolean}
 */
export default function lemonadeChange(bills) {
  let five = 0;
  let ten = 0;

  for (let i = 0; i < bills.length; i++) {
    switch (bills[i]) {
      case 5:
        five++;
        break;
      case 10:
        if (five <= 0) return false;

        ten++;
        five--;
        break;
      case 20:
        if (ten >= 1 && five >= 1) {
          ten--;
          five--;
        } else if (five >= 3) {
          five -= 3;
        } else {
          return false;
        }
        break;
    }
  }

  return true;
}
