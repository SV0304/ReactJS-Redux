let name="Shaju";
console.log(name);
function Uppercase(name){
	return name.toUpperCase();
}

let tmpl = `<h1> ${Uppercase('Welcome')}, \"${name}\"</h1><p>This is template in ES6</p>`;

document.getElementById("div1").innerHTML = tmpl;