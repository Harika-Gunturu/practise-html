function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}
    Book.prototype.getsummary = function(){
        return '${this.title} was written by ${this.author}  in ${this.year}';
    };

    

const book1 = new Book('Book one','hari','2020');
const book2 = new Book('Book two','krishna','2023');
console.log(book1);  




function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}
    Book.prototype.getsummary = function(){
        return '${this.title} was written by ${this.author}  in ${this.year}';
    };

    Book.prototype.getAge = function(){
        const years = new Date().getFullYear()- this.year;
        return '${this.title} is ${years} years old';
    };

const book0 = new Book('Book one','hari','2020');
const book7 = new Book('Book two','krishna','2023');
console.log(book7.getAge());              



function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}
    Book.prototype.getsummary = function(){
        return '${this.title} was written by ${this.author}  in ${this.year}';
    };

    Book.prototype.getAge = function(){
        const years = new Date().getFullYear()- this.year;
        return '${this.title} is ${years} years old';
    };

Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revised = true;
};
const book3 = new Book('Book one','hari','2020');
const book4 = new Book('Book two','krishna','2023');
console.log(book3);
book3.revise('2021');
console.log(book3);      