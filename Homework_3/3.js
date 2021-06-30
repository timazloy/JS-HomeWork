'use strict'
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

function discount(product) {
    let a = product.price * 0.85;
    console.log(a);
}

products.forEach(discount);


