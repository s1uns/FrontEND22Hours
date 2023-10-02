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

// let mouseBlock = document.querySelector('.block-for-mouse');


// mouseBlock.addEventListener("mouseenter", (event) => {
// 	mouseBlock.innerHTML = 
// 	`<span class = "block-mouse-text"> ClientX: ${event.clientX} <br> ClientY: ${event.clientY} </span>`
// })
// mouseBlock.addEventListener("mouseout", () => {
// 	mouseBlock.innerHTML = 
// 	""
// })

// let mouseBlock = document.querySelector('.block-for-mouse');
// let mouseBlocktext = document.querySelector('.block-mouse-text');


// mouseBlock.addEventListener("mousemove", (event) => {
// 	mouseBlocktext.innerHTML =
// 	`ClientX: ${event.clientX} <br> ClientY: ${event.clientY} `
		
// })


// mouseBlock.addEventListener("mouseout", () => {
// 	mouseBlocktext.innerHTML =
// 		""
// })

const blockForMouse = document.querySelector('.block-for-mouse');
blockForMouse.addEventListener("mouseover", function (event) {
	let target = event.target.closest('span');
	// переход не на <span> - игнорировать
	if (!target) return;
	target.style.cssText = `background-color: #${Math.floor(Math.random()*16777215).toString(16)}`;
});
blockForMouse.addEventListener("mouseout", function (event) {
	let target = event.target.closest('span');
	// переход не на <span> - игнорировать
	if (!target) return;
	target.style.cssText = ``;
});