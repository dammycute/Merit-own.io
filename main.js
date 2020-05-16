const hamburger = document.querySelector('.ham');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelector('.nav-links li');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});