'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */

function getMinMax(str) {
  let minMaxNumbers = {};
  let numbers = getArrNumbers(str);
  console.log(numbers);
  minMaxNumbers.min = Math.min.apply(null, numbers);
  minMaxNumbers.max = Math.max.apply(null, numbers);
  return minMaxNumbers;
}

// Возвращает из строки массив чисел
function getArrNumbers(a) {
  let numbers = [];
  let number = '';
  for (let i = 0; i < a.length; i++) {
    if (isNumeric(a[i]) || a[i] === '-' || a[i] === '.') {
      number = number + a[i];
      if (i === a.length - 1) {
        numbers.push(parseFloat(number));
      }
    } else {
      if (isNumeric(parseFloat(number))) {
        numbers.push(parseFloat(number));
      }
      number = '';
    }
  }
  return numbers;
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}


