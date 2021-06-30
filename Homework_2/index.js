"use strict";
/*
Инкремент в префиксной форме. а = 1 + 1 = 2. Двойка возвращается в переменную с. с = 2. 
*/
let a = 1, b = 1, c, d;
c = ++a;
alert(c);
/*
 Инкремент в постфиксной форме. d = 1.
*/
d = b++;
alert(d);
/*
 Из первого примера a = 2; инкремент в префиксной форме, поэтому c = 2 + 3 = 5.
*/
c = 2 + ++a;
alert(c);
/*
 Во втором примере b = 2, но т.к. тут мы используем инкремент в постфиксной форме, то будет 2 + 2 = 4.
*/
d = 2 + b++;
alert(d);



/* 
Сначала действие в скобках. 2 * 2 = 4. 4 возвращаем в z. 4 + 1 = x.
Итого:
z = 4;
x = 5;
 */
let z = 2;
let x = 1 + (z *= 2);



/* 
Надеюсь я правильно понял поставленную задачу.
 */
let e = parseInt(prompt("Введите первое число: "));
let r = parseInt(prompt("Введите второе число: "));
if (e >= 0 && r >= 0) {
    console.log(e - r);
} else if (e < 0 && r < 0) {
    console.log(e * r);
} else if (e >= 0 && r < 0 || e < 0 && r >= 0) {
    console.log(e + r);
}


/**
* Функция складывает параметры
* @param {number}
* @param {number}
* @returns {number}
*/
function summ(g, y) {
    return g + y;
}
/**
* Функция вычитает параметры
* @param {number}
* @param {number}
* @returns {number}
*/
function subtraction(g, y) {
    return g - y;
}
/**
* Функция перемножает параметры
* @param {number}
* @param {number}
* @returns {number}
*/
function multiplication(g, y) {
    return g * y;
}
/**
* Функция делит параметры
* @param {number}
* @param {number}
* @returns {number}
*/
function division(g, y) {
    return g / y;
}



function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return summ(arg1, arg2);
        case "-":
            return subtraction(arg1, arg2);
        case "*":
            return multiplication(arg1, arg2);
        case "/":
            return division(arg1, arg2);
        default:
            throw new Error("Операция " + operation + " не предусмотрена");

    }
}

console.log(mathOperation(2, 3, "+"));
console.log(mathOperation(10, 2, "-"));
console.log(mathOperation(12, 4, "/"));
console.log(mathOperation(10, 2, "-"));