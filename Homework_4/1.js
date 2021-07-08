'use strict'

function getObject(num) {
    if (!Number.isInteger(num) || num < 0 || num > 999) {
        alert("Число должно быть целым, в диапазоне от 0 до 999");

    } else {
        function Number(num) {
            this.units = (num % 10);
            this.tens = Math.floor(num % 100 / 10);
            this.hundreds = Math.floor(num / 100);
        }
        const a = new Number(num);
        console.log(a);
    }
}

let a = +prompt("Введите цело число от 0 до 999: ")
getObject(a);


//