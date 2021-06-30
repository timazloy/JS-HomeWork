
const productss = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
]

let Foto = productss.filter(item => "photos" in item && item.photos.length > 0);
console.log(Foto);

productss.sort(function (number1, number2) {
    if (number1.price > number2.price) {
        return 1;
    }
    if (number2.price > number1.price) {
        return -1;
    }
    return 0;
});

console.log(productss);