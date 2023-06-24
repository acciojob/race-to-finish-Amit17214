window.promises = [];

let a = new Promise(resolve => {
	setTimeOut(() => {
		resolve("a")
	}, 3000)
})
let b = new Promise(resolve => {
	setTimeOut(() => {
		resolve("b")
	}, 2000)
})
let c = new Promise(resolve => {
	setTimeOut(() => {
		resolve("c")
	}, 1000)
})
let d = new Promise(resolve => {
	setTimeOut(() => {
		resolve("d")
	}, 4000)
})
let e = new Promise(resolve => {
	setTimeOut(() => {
		resolve("e")
	}, 5000)
})
let x = Promise.any([a, b, c, d, e])
windows.promises = [a, b, c, d, e];
x.then((data) => {
	const element = document.getElementById("output");
	element.innerText = data ;
})
// Do not change the code above this
// add your promises to the array `promises`
