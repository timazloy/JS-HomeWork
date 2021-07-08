'use strict'
// es5
function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    this.price = this.price * 0.75;
};

const product1 = new Product('Товар', 1000);
product1.make25PercentDiscount();

console.log(product1);

// es6

class Product10 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price = this.price * 0.75;
    };
}
const product2 = new Product10('Товар', 1000);
product2.make25PercentDiscount();

console.log(product2);


