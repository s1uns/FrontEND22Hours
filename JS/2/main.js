// // // const firstVar = 250;
// // // console.log(firstVar);

// // // let myFriends = [];

// // // function AddMyFriends(friend) {
// // //     myFriends.push(friend);
// // //     console.log(myFriends);
// // // }

// // // AddMyFriends("illia");
// // // AddMyFriends("petro");

// // const age = 19;

// // function AgeAge() {
// //     const age = 23;
// //     console.log(age);
// // }

// // AgeAge();
// // console.log(age);

// let heading = document.querySelector('.helloWorld');

// let listItems = document.querySelectorAll('ul li');

// for(let i = 0; i<listItems.length; i++){
//     listItems[i].innerText = "Bruh";
// }

// heading.innerText = "Hello Illia!!";

const incrementBtn = document.querySelector('#increment');
const decrementBtn = document.querySelector('#decrement');
const counter = document.getElementById('counter');
const ulElement = document.getElementById('list-items');
let count = 0;
function incrementCounter(){
    count++;
    counter.innerText = count;

    //Create the element
    const li = document.createElement('li');
    const b = document.createElement('b');
    // li.innerText = ("Item " + count);
    const textNode = document.createTextNode("Item ");
    b.appendChild(textNode);
    const textNode2 = document.createTextNode(count);
    li.appendChild(b);
    li.appendChild(textNode2);

    //Append the elemnt to the list
    ulElement.appendChild(li);
}

function decrementCounter(){
    count--;
    counter.innerText = count;
}

incrementBtn.addEventListener('click', incrementCounter);
decrementBtn.addEventListener('click', decrementCounter);