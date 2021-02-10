let myNameArray = ["Chris", "Bob", "Jim"];
let myNumberArray = [10, 15, 40];

// This prints out the array value.
console.log(myNameArray[0]);
console.log(myNumberArray[0]);

// Note that computers start counting from 0!
console.log(myNameArray[2]);
console.log(myNumberArray[2]);

// When the value is outside of the array, it will return undefined.
console.log(myNameArray[3]);
console.log(myNumberArray[3]);  

// Converting strings to arrays
// from MDN; The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call. 
let myData = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle"; // defines a string
let myArray = myData.split(","); // splits the string by ',' and makes it into an array
console.log(myArray);
console.log(myArray[3]);

// You can turn an array into a string with join()
let myNewString = myArray.join("/") // This makes a string with the array, and adds a /
console.log(myNewString);

// push() adds another value to the end of an array.
// Note that this returns the total number of values in that array.
console.log(myArray[6]); // Note that this appears as undefined initially in the console.
console.log(myArray.push("Cardiff")); // This returns 7 in the array.
console.log(myArray[6]); // Now this should return 'Cardiff' in the console.

// pop() removes a value from the end of the array.
console.log(myArray[6]); // Should return 'Cardiff' in the console initially.
myArray.pop(); // Removes the last value.
console.log(myArray[6]); // Now this should return undefined in the console.

// For adding and removing values at the beginning of the array, you can use unshift() and shift() respectively.
console.log(myArray[0]); // Should return Manchester initially.
console.log(myArray.unshift("Edinburgh")); // Adds a value to the beginning and now returns 7.
console.log(myArray[0]); // Now returns Edinburgh.
myArray.shift(); // Removes Edinburgh from the beginning of the array.
console.log(myArray[0]); // Now returns Manchester.

// Constants
// These are values that cannot be changed once they are declared. So for example:
const daysInWeek = 7 // Sets the constant as 7
daysInWeek = 8 // This returns an error since the constant variable has already been defined as 7.

