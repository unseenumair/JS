// Function: A reusable block of code that performs a specific task.

// Regular function definition
function nice(name) { // Function name: nice, parameter: name
    console.log("Hey " + name + " you are good!"); // Code to be executed
    console.log("Hey " + name + " you are nice!");
    console.log("Hey " + name + " your tshirt is nice!");
}

nice("Harry"); // Calling the function with argument "Harry"
nice("Umair"); // Calling the function with argument "Umair"

function sum(a, b, c = 3) { // Function name: sum, parameters: a, b, c (c has a default value)
    console.log(a, b, c); // Prints the values of a, b, and c
    return a + b + c; // Returns the sum of a, b, and c
}

result1 = sum(4); // Calling sum with only one argument (c uses default value 3)
result2 = sum(43, 5, 1); // Calling sum with all three arguments
result3 = sum(3, 13); // Calling sum with two arguments (c uses default value 3)

console.log("The sum of these numbers is:", result1); // Printing the returned value
console.log("The sum of these numbers is:", result2);
console.log("The sum of these numbers is:", result3);

// console.log() always add a new line at the end , if you want to avoid it use process.stdout.write()

// instead of writing mix message use formating string like
// console.log("%s is our %s",  name, role);

// Arrow function: A shorter way to define functions

const func1 = (x) => { // Function name: func1, parameter: x
    console.log("I am an arrow function", x); // Code to be executed
}

func1(33); // Calling the arrow function
func1(66);
func1(99);

// Key Concepts:

// - Functions: Reusable blocks of code.
// - Parameters: Input values to a function.
// - Arguments: Actual values passed to a function when it's called.
// - Return value: A value that a function can send back after it's done.
// - Default parameters: Parameters can have default values if not provided.
// - Arrow functions: A concise syntax for defining functions.


// Some Important Functions:

// Number(): Converts a value to a number.
// Use case: Converting string input from prompts or form fields to numbers for calculations.
let ageString = prompt("Enter your age:");
let age = Number(ageString); // Convert the string to a number

// isNaN(): Checks if a value is "Not a Number".  Returns true if the value is NaN, false otherwise.
// Use case: Validating user input to ensure it's a number.
let userInput = prompt("Enter a number:");
if (isNaN(userInput)) {
    alert("Invalid input. Please enter a number.");
} else {
    let num = Number(userInput); // Convert to number after validation
    // ... use the number ...
}


// toLowerCase(): Converts a string to lowercase.
// Use case: Case-insensitive comparisons or normalizing text.
let city = "New York";
let lowercaseCity = city.toLowerCase(); // lowercaseCity will be "new york"
if (lowercaseCity === "new york") { // Case-insensitive check
    console.log("You live in New York (or new york)");
}


// toUpperCase(): Converts a string to uppercase.
// Use case: Displaying text in a consistent format (e.g., headings).
let message = "hello world";
let uppercaseMessage = message.toUpperCase(); // uppercaseMessage will be "HELLO WORLD"
console.log(uppercaseMessage);

// String(): Converts a value to a string.
// Use case: Displaying non-string values (numbers, booleans) in output.
let price = 99.99;
let priceString = String(price); // priceString will be "99.99"
console.log("The price is: $" + priceString);

// parseInt(): Parses a string and returns an integer. (Useful for whole numbers)
let quantityString = "10 apples";
let quantity = parseInt(quantityString); // quantity will be 10 (ignores " apples")
console.log("Quantity:", quantity);


// parseFloat(): Parses a string and returns a floating-point number. (Useful for decimals)
let priceString2 = "19.99 dollars";
let price2 = parseFloat(priceString2); // price2 will be 19.99 (ignores " dollars")
console.log("Price:", price2);

// eval(): Executes strings
eval(`3 + 5`); // Output: 8

// Important:  These are just a few of the many built-in functions in JavaScript.  
// Explore the documentation for more!
