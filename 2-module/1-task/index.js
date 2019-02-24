/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone(obj) {
    let cloneObj = {};
    for (let key in obj) {
        cloneObj[key] = obj[key];
        if (typeof obj[key] === "object") {
            if (obj[key] !== null) {
                cloneObj[key] = clone(obj[key]);
            } else {
                cloneObj[key] = obj[key];
            }
        }
    }
    return cloneObj;
}




