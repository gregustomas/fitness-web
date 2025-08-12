// toggle pro navbar menu

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navigate = document.querySelectorAll(".nav-menu li");

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
})

navigate.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});