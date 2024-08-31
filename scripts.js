let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector('.nav-bar');
let seccion = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav-bar a');

window.onscroll = () => 

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}