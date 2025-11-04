// Events in JS tells that "Something Happens"

console.log("Hello World");

// Mouse Events

function run(name, event, content){
	name.addEventListener(event, ()=>{
		name.innerHTML = content;
	});
}

let btn0 = document.querySelector("#btn0");
run(btn0, "click", "done");

let btn1 = document.querySelector("#btn1");
run(btn1, "dblclick", "<b>done</b>");

document.body.style.width = "100%";
document.body.parentElement.style.width = "100%"; // means HTML
document.body.style.height = "100%";
document.body.parentElement.style.height = "100%";

run(document.body, "contextmenu", "Don't <i>Hack</i> us by <b>Right Click</b>, Please.");

// KeyBoard Events

document.addEventListener("keydown", (e)=>{
	// console.log(e);
	console.log(e.key, e.keyCode); // keyCode is deprecated so, avoid it
});
