console.log("Hey JS Variables");

var a = 5; // DataType is number
var b = 6;
// b = b + 100 ; // Allowed to update var
// var b = 10; // Allowed to redeclare var
console.log(a + b + 8);

var c = "Umair"; // DataType is string
console.log(typeof a, typeof b,typeof c); // To find DataType of a variable

// Rules for Variables : 
// 1. Letter , digits , underscores & signs are allowed
// 2. Must begin with a $ , _ or a letter
// 3. JS reserved words can't be used as a variable such as let , const etc..
// 4. JS is a case sensitive programming language . So, UmaIr & UmAiR are two different variables.

const a1 = 40;
// a1 = a1 + 30 ; // Not Allowed to update a const
// const a1 = 30; // Not Allowed to redeclare a const

let c3 = 89;
// c3 = c3 + 10; // Allowed to update a let
// let c3 = 100; // Not Allowed to redeclare a let

// Always use let instead of var bcz let is globally as well as block scoped but var is only globally scoped
let b2 = 9; // var b2 = 9; 
{ // Block
  let b2 = 60; // var b2 = 66;
  console.log(b2);  
}
console.log(b2);  
  
// Primitive (Pre-Defined) DataTypes
let x = "CEO Umair";
let y = 22;
let z = 3.55;
const p = "true";
let q = undefined;
let r = null;

console.log(x,y,z,p,q,r);
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r);
// Why typeof null is object?
// StackOverflow Short Answer : This is a bug since the first release of ECMAScript(Standard for JS) which unfortunately can’t be fixed because it would break the existing code. Many JS Experts calls it a mistake but it can be removed bcz a large code would break if we change the datatypeof null as null.

// Objects in JS
let o = {
    name : "Umair",
    code : "JS" ,
    "Co. name" : "Comming Soon!"
}
console.log(o);
o.salary = "100 crores" ; // To add another key-value pair in an object 
console.log(o);
o.salary = "500 crores" ; // We can also change the value of the key in an obj
console.log(o);

o.is_handsome = true; // We can also add bolean values
console.log(o);

// In case of const objects i.e, const o = {} , we can update it but we cann't redeclare it as : 
const ob = {
    obj : "let"
}
console.log(ob);
ob.obj = "const"; // Allowed
console.log(ob);
// ob = o + 23 ; // Not Allowed