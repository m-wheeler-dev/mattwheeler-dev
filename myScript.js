// NAV ITEMS ACTIVE ON SCROLL
const navItems = document.querySelectorAll('#navbar a');
const sections = document.querySelectorAll('section');

function activeLink() {
   let index = sections.length;
 
   while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
   
   navItems.forEach((link) => link.classList.remove('active'));
   navItems[index].classList.add('active');
 }
 
 activeLink();
 window.addEventListener('scroll', activeLink);

//  DARK / LIGHT MODE TOGGLE
 const body = document.querySelector('body');
 const toggleBtn = document.querySelector('#toggler');

 toggleBtn.addEventListener('click', () => {
    body.classList.toggle("light");
 });