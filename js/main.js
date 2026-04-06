// Navbar scroll shadow

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {

navbar.classList.toggle('scrolled', window.scrollY > 20);

});


// Active nav link on scroll

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {

let current = '';

sections.forEach(section => {

if (window.scrollY >= section.offsetTop - 80) {

current = section.getAttribute('id');

}

});

navLinks.forEach(link => {

link.classList.remove('active');

if (link.getAttribute('href') === `#${current}`) {

link.classList.add('active');

}

});

});


// Scroll reveal animation

const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(

(entries) => {

entries.forEach((entry) => {

if (entry.isIntersecting) {

entry.target.classList.add("active");

}

});

},

{ threshold: 0.15 }

);

reveals.forEach((el) => {

revealObserver.observe(el);

});
