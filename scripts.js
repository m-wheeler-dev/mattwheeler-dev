//  GLOBAL VARIABLES
const body = document.querySelector("body");
const nav = document.querySelector("nav");
const navToggler = document.querySelector("#nav-toggler");
const modeToggleBtn = document.querySelector("#mode-toggler");

// TOGGLE NAV MENU
const toggleMenu = () => {
	const openNav = document.querySelector(".fa-bars-staggered");
	const closeNav = document.querySelector(".fa-xmark");

	nav.classList.toggle("sidebar");

	if (nav.classList.contains("sidebar")) {
		openNav.style.display = "none";
		closeNav.style.display = "block";
	} else {
		openNav.style.display = "block";
		closeNav.style.display = "none";
	}
};
navToggler.addEventListener("click", toggleMenu);

// DARK / LIGHT MODE TOGGLE
const toggleMode = () => {
	const moon = document.querySelector(".fa-moon");
	const sun = document.querySelector(".fa-sun");
	const logo = document.querySelector("#logo");
	body.classList.toggle("light");
	if (body.classList.contains("light")) {
		sun.style.display = "none";
		moon.style.display = "block";
		logo.src = "images/logo1-light.png";
	} else {
		sun.style.display = "block";
		moon.style.display = "none";
		logo.src = "images/logo1.png";
	}
};
modeToggleBtn.addEventListener("click", toggleMode);

// SET NAV ITEM ACTIVE BASED ON PAGE POSITION
const activeLink = () => {
	const sections = document.querySelectorAll("section");
	const navLinks = document.querySelectorAll(".nav-links a");
	let index = sections.length;

	while (--index && window.scrollY + 250 < sections[index].offsetTop) {}

	navLinks.forEach((link) => link.classList.remove("active"));
	navLinks[index].classList.add("active");
};

activeLink();
window.addEventListener("scroll", activeLink);
