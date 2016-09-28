/**
 * Created by home on 22.09.2016.
 */

// Рисуем октоторпами треугольник
var octo = "#";
for (var i = 0; i < 7; ++i) {
    console.log(octo);
    octo += "#";
}

// Разделитель
console.log("\n");

// Рисуем "шахматную доску"
var hash = "#";
var hash0 = " ";
for (var j = 1; j <= 8; ++j) {
    if (j % 2 == 0) {
        var line_even = "";
        for (var k = 0; k < 4; ++k) {
            line_even += hash + hash0;
        }
        console.log(line_even);
    } else {
        var line_uneven = "";
        for (var k = 0; k < 4; ++k) {
            line_uneven += hash0 + hash;
        }
        console.log(line_uneven);
    }
}