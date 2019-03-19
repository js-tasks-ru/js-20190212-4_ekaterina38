'use strict';

/**
 * Функция декоратор makeLogging(fn, log), для функции fn
 * возвращающий обёртку, которая при каждом вызове добавляет её аргументы в массив log.
 * @param {Function} fn - декорируемая функция
 * @param {Array} log - массив для записи логов
 * @return {Function}
 */
function makeLogging(fn, log) {
    return function () {
        let args = [].slice.call(arguments);
        log.push(args);
        return fn.apply(this, arguments);
    }
}

function work(a, b) {
    return a + b;
}

let log = [];

work = makeLogging(work, log);
work(1, 2); // -> 3

//console.log(log[0][0] === 1, log[0][1] === 2);