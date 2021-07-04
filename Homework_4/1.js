'use strict'

function getObject(num) {
    if (!Number.isInteger(num) || num < 0 || num > 999) {
        let units = (num % 10);
        let tens = 55
        let hundreds = Math.floor(num / 100);

    } else {
        alert("Число должно быть целым, в диапазоне от 0 до 999");

    }

}

// еще не решил