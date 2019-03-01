/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
    let listWorkers = [];

    for (let i = 0; i < data.length; i++) {
        let workerAge = data[i].age;
        let salary = data[i].balance;
        let name = data[i].name;
        let listWorker = '';
        if (age >= workerAge) {
           listWorker = listWorker + name + ', ' + salary;
           listWorkers.push(listWorker);
        }
    }
    return listWorkers.join('\n');
}


