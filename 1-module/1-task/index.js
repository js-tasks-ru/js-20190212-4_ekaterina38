'use strict';
/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow (m, n) {
  let result = 1;
  if (n > 0) {
    for (let i = 1; i <= n; i++) {
      result = result * m;
    }
    return result;
  } else {
    alert('Вы ввели неверный показатель степени');
  }
}

let a = +prompt('Введите основание степени: ', '0');
let b = +prompt('Введите показатель степени (натуральное число): ', '0');
