const body = document.body;
// body.append("Hello world!");
const div = document.createElement('div');
div.innerText = "Hello world"
body.append(div);

const venus = document.querySelector('[title = "Venus"]');
console.log(venus.title);

venus.title = "Earth";

console.log(venus.title);
