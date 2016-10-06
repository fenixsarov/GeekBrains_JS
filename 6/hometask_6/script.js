/**
 * Created by fenixsarov on 04.10.16.
 */
// Первое задание
// Функция получает элемент и создаёт новый список, где этот элемент
// добавлен спереди к первоначальному списку
function prepend(element, old_list) {
    return {
        value: element,
        rest: old_list
    }
}

// Функция в качестве аргументов принимает список и число,
// а возвращает элемент на заданной позиции в списке,
// или же undefined в случае отсутствия такого элемента.
function nth(list, position) {
    var array = [];
    var tmp = list;

    while (tmp) {
        array.push(tmp.value);
        tmp = tmp.rest;
    }
    return array[position] ? array[position] : "undefined";
}

var list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};
console.log(prepend("2", list));
console.log(nth(list, 0));
console.log(nth(list, 10));

// Функция удаляет первый элемент массива и возвращает получившийся массив
function unprepend(array) {
    var tmp = array.shift();
    return array;
}

// Функция, которая строит односвязный список, получая в качестве аргумента [1, 2, 3]
function arrayToLst(array) {
    var list = null;
    for (var i = array.length - 1; i >= 0; i--) {
        list = {
            value: array[i],
            rest: list
        };
    }
    return list;
}

//Фактически, обратная функция
function listToArray(list) {
    var array = [];
    for (var element = list; element; element = element.rest)
        array.push(element.value);
    return array;
}

console.log(arrayToLst(["1", "2", "3"]));
console.log(listToArray(list));

console.log("\n");