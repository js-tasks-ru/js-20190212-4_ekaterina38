/**
 * Клонируем объект
 * @param {Object} obj - объект в котором ищем
 * @param {*} value - значение, которе ищем
 * @returns {Object}
 */
function find (obj, value) {
    let onePath = '';
    let path = [];
    let numberKeys = 0;

    for (let key in obj) {
        if (obj[key] === value) {
            onePath = key + '.';
            onePath = onePath.slice(0, length - 1);
            path.push(onePath);
            numberKeys++;
        }

        if (typeof obj[key] === 'object' && obj[key] !== null) {
            //onePath = key + '.' + find (obj[key], value);
            if (find (obj[key], value) !== null) {
                onePath = key + '.' + find (obj[key], value);
                path.push(onePath);
            }
        }
    }

    if (path.length > 0) {
        if (path.length === 1) {
            path = path.join('');
        }
        return path;
    }
    return null;
}

// let obj = {
//     style: {
//         border: {
//             color: 'red',
//             prop: {
//                 color: 'red'
//             },
//
//         }
//     }
// };
//
// console.log(find(obj, 'red'));




