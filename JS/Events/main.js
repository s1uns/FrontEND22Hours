// let btn = document.querySelector('.btn');

// // btn.onclick = () => {
// //     console.log("Glory to Ukraine!");
// // }

// btn.addEventListener('click', () => {
//    console.log("Glory to Ukraine!")
// }, {
//     "once": true
//     });
// btn.addEventListener('click', () => console.log("Glory to the Heroes!"));

const menuBody = document.querySelector('.menu');

document.addEventListener("click", menu);

function menu(event) {
	if (event.target.closest('.menu__button')) {
		menuBody.classList.toggle('_active');
	}
	if (!event.target.closest('.menu')) {
		menuBody.classList.remove('_active');
	}
}