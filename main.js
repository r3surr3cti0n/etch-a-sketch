// 16x16 div
const divs = 256;

window.addEventListener("DOMContentLoaded", createDivs);

function createDivs() {
	const container = document.querySelector(".container");

	for (let i = 0; i < divs; i++) {
		let div = document.createElement("div");
		div.setAttribute("class", "square");
		container.append(div);
		div.addEventListener("mouseover", setColor);
	}
}

function setColor(e) {
	e.target.style.background = "blue";
}
