window.addEventListener("DOMContentLoaded", createDivs);

function createDivs() {
	const container = document.querySelector(".container");

	for (let i = 0; i < 256; i++) {
		container.innerHTML += "<div class='square'></div>";
	}
}
