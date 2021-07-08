'use strict'
// A es5
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function () {
    let a = prompt("Введите текст: ");
    this.text = a;
}

const post1 = new Post("Рыба", "Лорем ипсум долор", "11.11.2011");
post1.edit();

console.log(post1);

// Б es6
class Post1 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit() {
        let a = prompt("Введите текст: ");
        this.text = a;
    };
}
const post2 = new Post1("Рыба", "Лорем ипсум долор", "11.11.2011");
post2.edit();

console.log(post2);

