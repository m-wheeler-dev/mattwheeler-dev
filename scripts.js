// GLOBAL VARIABLES
const body = document.querySelector("body");
const sections = document.querySelectorAll("section");
const navbar = document.querySelector("nav");
const navItems = document.querySelectorAll(".nav-link");
const openNavBtn = document.querySelector("#open-nav");
const closeNavBtn = document.querySelector("#close-nav");

// OPEN NAV
function openNav() {
	openNavBtn.classList.add("hide");
	closeNavBtn.classList.add("show");
	navbar.classList.add("show");
}

openNavBtn.addEventListener("click", openNav);

// CLOSE NAV
function closeNav() {
	openNavBtn.classList.remove("hide");
	closeNavBtn.classList.remove("show");
	navbar.classList.remove("show");
}

closeNavBtn.addEventListener("click", closeNav);

// NAV ITEMS ACTIVE ON SCROLL
function activeLink() {
	let index = sections.length;

	while (--index && window.scrollY + 150 < sections[index].offsetTop) {}

	navItems.forEach((link) => link.classList.remove("active"));
	navItems[index].classList.add("active");
}

activeLink();
window.addEventListener("scroll", activeLink);
