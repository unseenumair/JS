// CallBack functions in easy words is a way to execute a function inside another function but after the excution of that function, It is also a way to pass a function as avariable

function fn(){
	console.log("Nothing");
}

function callback(arg, fn){
	console.log(arg);
	fn();
}

function loadScript(src, callback){
	let script = document.createElement("script"); // <script></script> tag
	script.src = src; // src="" tag
	script.onload = callback("Umair", fn); // After Script has loaded
	document.body.append(script); // Append script element at the end of body
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback) // CallBack is a function but it is passed as a variable , this method is actually called as "CallBack Functions"

// Why use callback functions when direct function calls works fine ? 
// Answer :

// Direct function Call
setTimeout(fn(), 2000); // Engine Wait and After executing fn after 2s , it continues to next statements exeuction

console.log("Direct Call End")

// Using CallBack
setTimeout(fn, 2000); // Will be Executed at last. Js Engine don't stop at this and don't wait for 2s

console.log("CallBack End");
