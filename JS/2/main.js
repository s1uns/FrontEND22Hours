// // // // // // const firstVar = 250;
// // // // // // console.log(firstVar);

// // // // // // let myFriends = [];

// // // // // // function AddMyFriends(friend) {
// // // // // //     myFriends.push(friend);
// // // // // //     console.log(myFriends);
// // // // // // }

// // // // // // AddMyFriends("illia");
// // // // // // AddMyFriends("petro");

// // // // // const age = 19;

// // // // // function AgeAge() {
// // // // //     const age = 23;
// // // // //     console.log(age);
// // // // // }

// // // // // AgeAge();
// // // // // console.log(age);

// // // // let heading = document.querySelector('.helloWorld');

// // // // let listItems = document.querySelectorAll('ul li');

// // // // for(let i = 0; i<listItems.length; i++){
// // // //     listItems[i].innerText = "Bruh";
// // // // }

// // // // heading.innerText = "Hello Illia!!";

// // const incrementBtn = document.querySelector('#increment');
// // const decrementBtn = document.querySelector('#decrement');
// // const counterEl = document.getElementById('counter');
// // const ulElement = document.getElementById('list-items');
// // let counter = 0;

// // function incrementCounter() {
// //     counter++;
// //     counterEl.innerText = counter;

// //     //Create the element
// //     const li = document.createElement('li');
// //     li.setAttribute('data-counter', counter);
// //     li.innerHTML = '<b>Something</b> ' + counter;
// //     if(counter % 2 == 0){
// //         li.classList.add('class', 'yellow');
// //     }
// //     else{
// //         li.setAttribute('class', 'blue');
// //     }
// //     // const b = document.createElement('b');
// //     // // li.innerText = ("Item " + count);
// //     // const textNode = document.createTextNode("Item ");
// //     // b.appendChild(textNode);
// //     // const textNode2 = document.createTextNode(count);
// //     // li.appendChild(b);
// //     // li.appendChild(textNode2);



// //     //Append the elemnt to the list
// //     ulElement.appendChild(li);
// // }

// // // function decrementCounter() {
// // //     const li = ulElement.querySelector('[data-counter = "' + counter +'"]');
// // //     li.remove();
// // //     counter--;
// // //     counterEl.innerText = counter;

// // // }

// // incrementBtn.addEventListener('click', incrementCounter);
// // // decrementBtn.addEventListener('click', decrementCounter);

// // const arr1 = [1, 2, 3];
// // const arr2 = [4, 5, 6];
// // const arr = [...arr1, arr2]
// // console.log(arr)

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(arr);

// arr.forEach(function(element) {element = element**2});



// console.log(arr);

const promiseObject = fetch('data.json');
promiseObject.then(response => {
    const promiseObject2 = response.json();
    promiseObject2.then(data => {
        console.log(data);
    })
});