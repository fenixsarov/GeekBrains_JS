// Функция min принимает два аргумента и выводит минимальный из них
// Дополнительно ввёл проверку на соответствие типа аргумента,
// без неё считаю сравнивать аргументы нельзя
function min(num1, num2) {
    if (typeof(num1) == "number" && typeof(num2) == "number") {
        if (num1 > num2)
            return num1;
        else if (num1 < num2)
            return num2;
        else
            return console.log("Числа равны");
    } else {
        return "Один из аргументов не число";
    }
}

console.log(min(0, 10));
console.log(min(0, -10));
console.log(min(2, "gh"));

// Функция countBS считает считает
function countBS(string) {
    if (typeof(string) == "string") {
        var counter = 0;
        for (var i = 0; i <= string.length; ++i) {
            if (string.charAt(i) == "B")
                ++counter;
        }
        return console.log(counter);
    } else {
        return console.log("Передаваемый аргумент не строка");
    }
}

countBS("AAdad adBbBBadadadwwo");

// Функция countChar
function countChar(str, charInStr) {
    if (typeof (str) == "string") {
        var countInStr = 0;
        for (var j = 0; j <= str.length; ++j) {
            if (str.charAt(j) == charInStr)
                ++countInStr;
        }
        return console.log("В строке \"" + str + "\" найдено " + countInStr +
            " символов " + charInStr);
    } else {
        return console.log("Первый параметр не строка");
    }
}

countChar("adsndjansdauSUDN", "a");