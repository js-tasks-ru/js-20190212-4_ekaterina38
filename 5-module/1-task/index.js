'use strict';

/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */

function highlight(table) {
    let tableBody = table.lastElementChild;
    let strs = tableBody.querySelectorAll('tr');
    for (let i = 0; i < strs.length; i++) {
        let atrAvailable = strs[i].lastElementChild.getAttribute('data-available');
        let atrGender = strs[i].children[2].innerHTML;
        let ataAge = strs[i].children[1].innerHTML;

        if (atrAvailable === 'true') {
            strs[i].classList.add('available');
        } else if (atrAvailable === 'false') {
            strs[i].classList.add('unavailable');
        } else {
            strs[i].setAttribute('hidden', '');
        }

        if (atrGender === 'f') {
            strs[i].classList.add('female');
        } else  if (atrGender === 'm') {
            strs[i].classList.add('male');
        }

        if (ataAge < 18) {
            strs[i].setAttribute("style", "text-decoration: line-through");
        }

    }

}

