/**
 * Created by fenixsarov on 06.10.16.
 */
// Функция получает массив как аргумент и выдаёт новый массив, с обратным порядком элементов. 
function reverseArray(array) {
    var result = [];
    for (var i = array.length - 1; i >= 0; i--) {
        result.push(array[i]);
    }
    return result;
}

console.log(reverseArray([1, 2, 3]));

function reverseArrayInPlace(array) {
    for (var i = 0; i < Math.floor(array.length / 2); i++) {
        var old_array = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old_array;
    }
    return array;
}
var arr = [1, 2, 3, 4];
reverseArrayInPlace(arr);
console.log(arr);