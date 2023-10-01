const body = document.body;
// body.append("Hello world!");
// const div = document.createElement('div');
// div.innerText = "Hello world"
// body.append(div);

// const venus = document.querySelector('[title = "Venus"]');
// console.log(venus.title);

// venus.title = "Earth";

// console.log(venus.title);

// let div = document.createElement('div');
// div.className = "msg"
// div.innerHTML = "Important info!";
// // div.classList.add('msg');
// // div.textContent = 'Важлива інформація!';
// document.body.append(div);

let list = document.querySelector('ul');

list.before("before");
list.after("after");

let li1 = document.createElement('li');
li1.innerHTML = 'First added list item';
list.prepend(li1);

let li2 = document.createElement('li');
li2.innerHTML = 'Last added list item';