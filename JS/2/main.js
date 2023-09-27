// // const firstVar = 250;
// // console.log(firstVar);

// // let myFriends = [];

// // function AddMyFriends(friend) {
// //     myFriends.push(friend);
// //     console.log(myFriends);
// // }

// // AddMyFriends("illia");
// // AddMyFriends("petro");

// const age = 19;

// function AgeAge() {
//     const age = 23;
//     console.log(age);
// }

// AgeAge();
// console.log(age);

let heading = document.querySelector('.helloWorld');

let listItems = document.querySelectorAll('ul li');

for(let i = 0; i<listItems.length; i++){
    listItems[i].innerText = "Bruh";
}

heading.innerText = "Hello Illia!!";
