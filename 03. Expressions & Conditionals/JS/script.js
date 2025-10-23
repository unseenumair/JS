console.log("Hello! JS");

let age = 18;
let grace = 2;

// Arithmatic Operators
console.log(age + grace);
console.log(age - grace);
console.log(age * grace);
console.log(age / grace);
console.log(age ** grace); // Exponential Operator ; Make the second value Exponent(Power) of the first value as : 2 ^(Exponent : **) 2 
console.log(2 % 2); // Modulus Operator ; Tells the remainder of Division of values as : 2 % 2 = 0 and 3 % 3 = 0 
// Increment "++" is a shorthand of += 1
let e = 5;

// Using increment (++)
e++; // e is now 6
console.log(e); // Output: 6

// Same thing using += 1
let e1 = 5;
e1 += 1; // y is now 6
console.log(e1); // Output: 6

// Decrement "--" is a shorthand of -= 1
let h = 10;

// Using decrement (--)
h--; // a is now 9
console.log(h); // Output: 9

// Same thing using -= 1
let h1 = 10;
h1 -= 1; // b is now 9
console.log(h1); // Output: 9

// ++a; means First Use then Update a
// a++; means First Update then Use

// Assignment Operators
// "=" as let x = 4; let y = 3;
// "+=" as x += y; Or x = x + y;
// "-=" as x -= y; Or x = x - y;
// "*=" as x *= y; Or x = x * y;
// "/=" as x /= y; Or x = x / y;
// "**=" as x **= y; Or x = x ** y;
// "%=" as x %= y; Or x = x % y;

// Comparision Operators
// "==" equal to
age = 18;
if(age==18){
    console.log("You can drive");
}
else{
    console.log("You can't drive");
}
// "!=" not equal to
// "===" equal value and type
let a = "3";
if (a === 3) {
    console.log("'3' === " + a);
}
else{
    console.log("'3' != " + a);
}
// "!==" not equal value and not equal type
// ">" greater than
// "<" smaller than
// ">=" greater than or equal to
// "<=" smaller than or equal to
// "?" termary operator
let z = 6;
let k = 9;
let c = z>k ?(z-k) : (k-z) ; 
/* This translates to :
if (z>k){
    let c = z-k ;
}
else {
    let c = k-z ;
}
*/
console.log(c);

// Logical Operators
// "&&" logical and
if (3 != 2 && 2 != 3) {
    console.log("True")
}
// "||" logical or
if (3 != 2 || 3 != 3) {
    console.log("True")
}
// "!" logical not


/*
I am a multi-line comment
*/

age = 18;
// if else if ladder
if(age==18){
    console.log("You can drive");
}
else if(age==0){
    console.log("Are you kidding?");
}
else if (age == 1) {
    console.log("Are you again kidding?");
}
else{
    console.log("You can't drive");
} 

// Switch Case Statement , If the condition for output is simple :
let fruit = "apple";

// Begin a switch statement that evaluates the value of the 'fruit' variable.
switch (fruit.toLowerCase()) { // Convert to lowercase before comparing . You can also use "toUpperCase()" to convert it(Must be a string) to Upper case .. 
    // Case: If 'fruit' is "banana".
    case "banana":
        console.log("I like bananas!");
        break; // Exit the switch statement.
    case "apple":
        console.log("Apples are my favorite!");
        break;
    case "orange":
        console.log("Oranges are so juicy!");
        break;
// Default case: If 'fruit' does not match any of the above cases
    default:
        console.log("I don't know that fruit.");
}
