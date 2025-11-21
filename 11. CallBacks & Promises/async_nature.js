console.log("I am a Hacker"); // Execute 1
console.log("He is a Hecker"); // Execute 2

setTimeout(()=>{
	console.log("I am inside setTimeout");
}, 0);  // Execute at Last
// Execution Delayed for 2s and JS Engine continues to execute the remaining script, setTimeout() is delayed even we set time to 0ms !!

console.log("The End"); // Execute 3
