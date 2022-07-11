//2_constructor.js

function Book(title,author,year) {
    this.title = title;
    this.author = author;
    this.year = year;
}
const book1 = new Book('book one','hari','2020');
const book2 = new Book('book two','krishna','2023');
console.log(Book);//console.log(book1); //console.log(book1.title);  



function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function() {
        return '${this.title} was written by ${this.author}  in ${this.year}';
    };
}
const book1 = new Book('Book one','hari','2020');
const book2 = new Book('Book two','krishna','2023');
console.log(book1.getSummary());