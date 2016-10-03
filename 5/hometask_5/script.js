/**
 * Created by fenixsarov on 02.10.16.
 */

//Преобразование кода цветов из десятичной записи в шестнадцатиричную
function decToHex(redCode, greenCode, blueCode) {
    var check0 = "number";
    var result = "#";
    if (typeof(redCode) == check0 && typeof(greenCode) == check0 && typeof(blueCode) == check0) {
        var check1 = redCode >= 0 && redCode <= 255;
        var check2 = greenCode >= 0 && greenCode <= 255;
        var check3 = blueCode >= 0 && blueCode <= 255;
        if (check1 && check2 && check3) {
            result += redCode.toString(16) + greenCode.toString(16) + blueCode.toString(16);
            console.log(result);
        } else {
            console.log("Один из параметров < 0 или > 255...");
        }
    } else {
        console.log("Один из параметров не число...");
    }
}


decToHex(115, 156, 62); // работает
decToHex(115, 256, 62); // выведет сообщение об ошибку ввода

// Разделитель
console.log("\n");

// Функция, преобразующая число в объект
function numberToObject(number) {
    var objectNumber = {
        "единицы": 0,
        "десятки": 0,
        "сотни": 0
    };
    if (typeof(number) == "number") {
        console.log("Вы ввели: " + number + ", а получили: ");
        if (number >= 0 && number <= 9) {
            objectNumber["единицы"] = number;
        } else if (number >= 10 && number <= 99) {
            objectNumber["единицы"] = number % 10;
            objectNumber["десятки"] = (number - (number % 10)) / 10;
        } else if (number >= 100 && number <= 999) {
            var units = (number % 100) % 10;
            var dozens = ((number - units) % 100) / 10;
            objectNumber["единицы"] = units;
            objectNumber["десятки"] = dozens;
            objectNumber["сотни"] = (number - units - dozens * 10) / 100;
        } else {
            console.log("Заданное число не входит в диапазон 0 <= x <= 999");
        }
        return console.log(objectNumber);
    } else
        console.log("Заданный параметр не число...");
}
numberToObject(7);
numberToObject(39);
numberToObject(245);

// Разделитель
console.log("\n")

// Функция принимает аргументом объект, а возвращает строку
function objectToQueryString(object) {
    // На самом деле проверка должна быть чуть более тщательная,
    // т.к. var a = []; typeof(a) -> тоже object
    if (typeof(object) == "object") {
        var string = "";
        var counter = 0;
        for (var i in object)
            ++counter;

        for (var prop in object) {
            string += prop;
            string += "=";
            string += object[prop];
            --counter;
            if (counter != 0) {
                string += "&";
            }
        }
        return string;
    } else {
        return "Заданный аргумент не объект";
    }
}

console.log(objectToQueryString({
    user: "Dmitry"
}));
console.log(objectToQueryString({
    user: "Dmitry",
    password: "pass"
}));
console.log(objectToQueryString({
    user: "Dmitry",
    password: "pass",
    id: 1
}));