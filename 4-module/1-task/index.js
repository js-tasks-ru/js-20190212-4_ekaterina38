'use strict';

/**
 * Генерация HTML списка друзей
 * @param {Friend[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList (friends) {
    let friendsList = document.createElement('ul');
    for (let i = 0; i < friends.length; i++) {
        let friend = document.createElement('li');
        friend.innerText = friends[i].firstName + ' ' + friends[i].lastName;
        friendsList.appendChild(friend);
    }
    return friendsList;
}

