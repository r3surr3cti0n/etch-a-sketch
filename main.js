// 16x16 div
const input = document.querySelector(".divs");
const container = document.querySelector(".container");
const squares = Array.from(container.querySelectorAll(".square"));
const clearBtn = document.querySelector(".clear");
let divs = input.value;

// Create divs when the DOM loaded.
window.addEventListener("DOMContentLoaded", () => {
	createDivs(divs);
});

// Get input value and
input.addEventListener("change", (e) => {
	divs = e.target.value;
	createDivs(divs);
});

// Clear container on clearBtn click.
clearBtn.addEventListener("click", Clear);

// This function create the grid layout and appeand divs to it
function createDivs(div) {
	container.innerHTML = "";
	setColumns(div);
	setRows(div);

	for (let i = 0; i < div * div; i++) {
		let newDiv = document.createElement("div");
		newDiv.setAttribute("class", "square");
		container.append(newDiv);
		newDiv.addEventListener("mouseover", setColor);
	}
}

// Create grid container
function setColumns(column) {
	container.style.gridTemplateColumns = `repeat(${column},1fr)`;
}

function setRows(row) {
	container.style.gridTemplateRows = `repeat(${row},1fr)`;
}

// Set square color
function setColor(e) {
	e.target.classList.add("hovered");
	e.target.style.background = randomColor();
}

// Clear container
function Clear() {
	createDivs(divs);
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
