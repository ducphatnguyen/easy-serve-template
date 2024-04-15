
const burgerIcon = document.querySelector('.header__navbar-burger');
const crossIcon = document.querySelector('.header__navbar-cross');

const navbarDropdown = document.querySelector('.header__navbar-dropdown');
const headerNavbar = document.querySelector('.header__navbar');

burgerIcon.addEventListener('click', function(e) {
    e.stopPropagation();
    burgerIcon.classList.toggle('header__navbar-burger--hide'); 
    crossIcon.classList.toggle('header__navbar-cross--show'); 
    navbarDropdown.classList.toggle('header__navbar-dropdown--show');
    headerNavbar.classList.toggle('header__navbar--mobile-bg');
});

crossIcon.addEventListener('click', function(e) {
    e.stopPropagation();
    burgerIcon.classList.toggle('header__navbar-burger--hide'); 
    crossIcon.classList.toggle('header__navbar-cross--show'); 
    navbarDropdown.classList.toggle('header__navbar-dropdown--show');
    headerNavbar.classList.toggle('header__navbar--mobile-bg');
});


