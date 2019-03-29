'use strict';

/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 * @constructor
 */
function SortableTable(items) {

    //this.items = items;

    this.sort = function (column, desc) {

        function compare (param) {
            return function (a, b) {
                if (a[param] > b[param]) {
                    return 1;
                }
                if (a[param] < b[param]) {
                    return -1;
                }
                return 0;
            }
        }

        if (column === 0) {
            items.sort(compare('name'));
            //console.log(items);
        } else if (column === 1) {
            items.sort(compare('age'));
        } else if (column === 2) {
            items.sort(compare('salary'));
        } else if (column === 3) {
            items.sort(compare('city'));
        }
        if (desc) {items = items.reverse();}

        this.newTable();
    };



    //@property {Element} - обязательно свойство, которое ссылается на элемент <table>
    this.newTable = function () {
        //console.log('newTable', this.items);

        let el = document.querySelector('table');
        if(el) {
            el.parentNode.removeChild(el);
        }

        this.el = document.createElement('table');
        let tbody = document.createElement('tbody');
        let thead = document.createElement('thead');
        thead.innerHTML = '<tr>'+'<td>Name</td>'+
        '<td>Age</td>'+'<td>Salary</td>'+
        '<td>City</td>'+'</tr>';
        this.el.appendChild(thead);


        this.el.appendChild(tbody);


        for (let i = 0; i < items.length; i++) {
            let tr = document.createElement('tr');
            tbody.appendChild(tr);
            for (let j = 0; j < 4; j++) {
                let td = document.createElement('td');
                if (j === 0) {
                    td.innerText = items[i].name;
                } else if (j === 1) {
                    td.innerText = items[i].age;
                } else if (j === 2) {
                    td.innerText = items[i].salary;
                } else if (j === 3) {
                    td.innerText = items[i].city;
                }

                tr.appendChild(td);
            }
        }

        document.querySelector('body').appendChild(this.el);
    };

    this.newTable();

    // Метод выполняет сортировку таблицы
    // @param {number} column - номер колонки, по которой нужно выполнить сортировку (отсчет начинается от 0)
    // @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
}


