// Some fun notes about objects:
// They should NOT be camelCased and instead PascalClased as convention:
// Eg. You should define an object as 'FancyNewObject' rather than 'fancyNewObject'

// // We make a new constructor function, using this to make the key-value pairs, and we also add a function to the object that displays a summary
// function Book(title, author){ 
//     this.title = title,
//     this.author = author
//     this.summary = function summary(){
//         console.log(`${title} was written by ${author}`);
// }
// }

// Now we instantiate an Object using our constructor function:
// const newBook = new Book("Catcher in the Rye", "Salinger");
// console.log("7: This book contains", newBook);

// Alternatively, we can use a class to instantiate an object
class Book {
    constructor(title, author) {
        this.title = title,
        this.author = author
        console.log("Making new book!");
    }
}

// Instead of putting the summary() method in the object itself, we can attach it to the prototype of that object and still call on it as usual.
// This method returns a summary of the book oject
Book.prototype.summary = function(){
    return `${this.title} was written by ${this.author}.`
};
// This method adds a key value pair to the book object indicating if a book has been read
Book.prototype.markRead = function(boolean){
    this.haveRead = boolean;
    console.log("Book marked as read!");
}

// We can set the new class as a way to create new objects, along with any key-value pairs and methods we've set up
const bookOne = new Book("The Catcher in the Rye", "Salinger");
console.log("39: This new Book object is:", bookOne);
console.log("40:", bookOne.summary());
console.log(bookOne.markRead(true));
console.log(bookOne);

const bookTwo = new Book("The Stranger", "Camus");
console.log("45: This new Book object is:", bookTwo);
console.log("46:", bookTwo.summary());

// It appears we can also deconstruct an object that we've made as well
const { summary: bookSummary } = new Book("The Metamorphosis", "Kafka");
console.log(bookSummary());