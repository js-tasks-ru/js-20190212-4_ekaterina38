/**
 * Клонируем объект
 * @param {Object} obj - объект в котором ищем
 * @param {*} value - значение, которе ищем
 * @returns {Object}
 */
function find(obj, value) {
    let paths = [];

    Object.keys(obj).forEach(function (key) {
        if(obj[key] === value) {
            paths.push(key);
        }
        if(typeof obj[key] === 'object') {
            let result_paths = find(obj[key], value);

            if(typeof  result_paths !== 'object') {
                result_paths = [result_paths];  // единственный результат
            } else if (result_paths === null) {
                result_paths = [];  // ничего не было найдено
            }

            for(let i=0; i<result_paths.length; i++) {
                paths.push(`${key}.${result_paths[i]}`);
            }
        }
    });

    if(paths.length === 0) {
        return null;
    } else if(paths.length === 1) {
        return paths[0];
    } else {
        return paths;
    }
}

let obj = {
    style: {
        test: 'red',
        color: 'red',
    }
};



