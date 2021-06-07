// 16x16 div
const input = document.querySelector(".divs");
const container = document.querySelector(".container");
let divs = input.value;
window.addEventListener("DOMContentLoaded", () => {
	if (divs <= 0) {
		Clear();
	} else {
		createDivs(divs);
	}
});

input.addEventListener("change", (e) => {
	divs = e.target.value;
	Clear();
	if (divs <= 0) {
		Clear();
	} else {
		createDivs(divs);
	}
});

function createDivs(div) {
	container.style.gridTemplateColumns = `repeat(${div},1fr)`;
	container.style.gridTemplateRows = `repeat(${div},1fr)`;

	for (let i = 0; i < div * div; i++) {
		let newDiv = document.createElement("div");
		newDiv.setAttribute("class", "square");
		container.append(newDiv);
		newDiv.addEventListener("mouseover", setColor);
	}
}

function setColor(e) {
	e.target.classList.add("hovered");
}

function Clear() {
	container.innerHTML = "";
}

// Generate a random color in hexadecimal notation
function randomColor() {
	let color = "#";

	for (let i = 0; i < 6; i++) {
		const random = Math.random();
		const bit = (random * 16) | 0;
		color += bit.toString(16);
	}
	return color;
}
