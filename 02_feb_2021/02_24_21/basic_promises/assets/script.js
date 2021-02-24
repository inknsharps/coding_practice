// A very, very basic promise resolution and reject situation
console.log("You'll randomly roll for a random fruit. If you get an apple, the promise is resolved! If you get something else, then the promise is rejected!")

// We declare the Promise (which also is called and runs imeediately, awaiting resolve or reject).
// In our case, since we have some code in the Promise function, that will run and resolve or reject the Promise.
let fruitPromise = new Promise((resolve, reject) => {
    const fruitList = ["Apple", "Orange", "Banana", "Pear", "Grape"];
    const randomFruit = fruitList[Math.floor(Math.random()*fruitList.length)];
    console.log("You picked a: " + randomFruit);
    if (randomFruit === "Apple"){
        resolve();
    } else {
        reject();
    }
});

// We then use .then() method for if the promise was resolved, and call a function that logs a message.
    // Side note, you CAN use .then() with a second argument which runs if the promise returns an error.
    // () => console.log("You didn't pick an Apple! The promise has been rejected. :<") would be the second argument you would put after line 23.
// If the promise was rejected, we use .catch() and call a function that logs a different message.
// .finally() will run the function to display the console log, AFTER the promise has been resolved, or rejected.
fruitPromise
    .then(() => console.log("You picked an Apple! The promise has been resolved! :D"))
    .catch(() => console.log("You didn't pick an Apple! The promise has been rejected. :<"))
    .finally(() => console.log("Refresh the page to run this promise example again!"));