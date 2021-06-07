// 16x16 div
const input = document.querySelector(".divs");
const container = document.querySelector(".container");
const squares = Array.from(container.querySelectorAll(".square"));
const clearBtn = document.querySelector(".clear");
let divs = input.value;

window.addEventListener("DOMContentLoaded", () => {
	if (divs <= 0 || 50 < divs) {
		setRows(1);
		setColumns(1);
		showError();
		clearBtn.removeEventListener("click", Clear);
	} else {
		container.style.placeItems = "unset";
		createDivs(divs);
		// Add event listener if the value is valid
		clearBtn.addEventListener("click", Clear);
	}
});

input.addEventListener("change", (e) => {
	divs = e.target.value;
	if (divs <= 0 || 50 < divs) {
		setRows(1);
		setColumns(1);
		showError();
		clearBtn.removeEventListener("click", Clear);
	} else {
		container.style.placeItems = "unset";
		createDivs(divs);
		// Add event listener if the value is valid
		clearBtn.addEventListener("click", Clear);
	}
});

function showError() {
	container.style.placeItems = "center";
	container.innerHTML = "Error.";
}

function setColumns(column) {
	container.style.gridTemplateColumns = `repeat(${column},1fr)`;
}

function setRows(row) {
	container.style.gridTemplateRows = `repeat(${row},1fr)`;
}

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

function setColor(e) {
	e.target.classList.add("hovered");
	e.target.style.background = randomColor();
}

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
