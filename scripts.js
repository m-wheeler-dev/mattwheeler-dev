//  GLOBAL VARIABLES
const body = document.querySelector("body");
const nav = document.querySelector("nav");
const navToggler = document.querySelector("#nav-toggler");

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
