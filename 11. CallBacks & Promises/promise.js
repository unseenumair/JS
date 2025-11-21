// Promises are the solution for CallBack Hell (When we use too many callback functions, it gets harder to manage code flow).

// CallBack can only used to delay execution
// Promise can delay execution and it also can be used to handle the result

console.log("This is Promises");

let prom1 = new Promise((resolve, reject) => {
	let n = Math.random();
	if (n < 0.5){
		reject("Random Number not Supported"); // Throw Error
	}
	else {
		setTimeout(()=>{
			console.log("I am Done");
			resolve("Umair"); // Throw Success
		}, 3000);
	}
});

prom1.then((a)=>{ // a receives value of reslove in promise
	console.log(a);
}).catch((err)=>{ // If Promise Rejected then catch the error msg (given in reject())
	console.log(err); // Print error msg as console.log() not as console.error()
})

// Promise API

// 1. Promise.all(promises) // Waits for All promises to resolve, if any one fails, then it ignores all other. If all reslove, it stores their results in an array

// 2. Promise.allSettled(promises) // Wait for all promises to settle and return their resutls as an array even if some promise fails

// 3. Promise.race(promises) // Waits for the first promise to settle and its result/error becomes the outcome, ignores remaining promises

// 4. Promise.any(promises) // Waits for first promise to suceeed (not rejected) and its results becomes the outcome. Throws Error if all promises rejected

// 5. Promise.resolve(value) // Makes a resolved promise with given value

// 6. Promise.reject(error) // Makes a rejected promise with given error
