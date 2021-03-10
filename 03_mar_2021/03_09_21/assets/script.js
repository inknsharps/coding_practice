// Constructor Practice
// This is a constructor that builds an object with a title, author and year
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}

// You can also add a prototype method to those objects that we have created with Constuctor.prototype.methodName = function(){}
// You can call this method on your constructed object to do something, essentially
// Important note- you should NOT use an arrow function for writing methods as it does not have bindings for 'this' or 'super'

// This method returns a string that displays the info in the object
Book.prototype.displayInfo = function(){
    return `${this.title} was written by ${this.author} and published in ${this.year}.`;
}
// This method adds a publisher key, which you can define the value of in the argument
Book.prototype.addPublisher = function(publisherName){
    this.publisher = publisherName;
}


// Declare variables for the new Book objects, which take the parameters that were provided to the constructor
let book1 = new Book("Book One", "Author One", "2001");
console.log(book1); // Displays the object in the console, note the displayInfo() method we made for it!
console.log(book1.displayInfo()); // Calls the displayInfo() method we made, and provides the info we requested from the object in one neat sentence.
book1.addPublisher("Publisher One"); // Calls the addPublisher() method we made, and adds a new key-value pair to the object.
console.log(book1); // Now when we console log book1 again, note that there's a new key-value pair of publisher: publisherName added!

let book2 = new Book("Book Two", "Author Two", "2002");
console.log(book2);
console.log(book2.displayInfo());
book2.addPublisher("Publisher Two");
console.log(book2);


