alert("Hello World");
console.log("Code is running..");
console.log("Code is looking like a Wow!");
console.log("JS is running...");

var a = prompt("Enter Your Number");
console.log("Your number is " + a);

var w = confirm("Are you sure you wanna leave this page and blast your Computer");
if (w) {
    console.log("Your computer is blasting");
}
else{
    console.log("Your computer is not blasting");
}

document.title = "Hello! JS." ;
document.body.style.backgroundColor = "red" ;

// Why to add semicolon(;) at the end of each statement ?
// Answer : JS use ASI (Automatic Semicolon Insertion) to add semicolons at end of each statement (where not present) . If we not add (;) normal statements will works fine, but sometime ASI will missunderstood statements and it will cause bugs.

/* Example:-
You Wrote:

a
++
b;

You consider, it is a++; b;
But ASI consider, it is a; ++b;

So, Adding a semicolon at end of every statement is a good practice
*/
