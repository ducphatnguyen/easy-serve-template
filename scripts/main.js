
// Header
const burgerIcon = document.querySelector('.header__navbar-burger');
const crossIcon = document.querySelector('.header__navbar-cross');

const navbarDropdown = document.querySelector('.header__navbar-dropdown');
const headerNavbar = document.querySelector('.header__navbar');

burgerIcon.addEventListener('click', function (e) {
    e.stopPropagation();
    burgerIcon.classList.toggle('header__navbar-burger--hide');
    crossIcon.classList.toggle('header__navbar-cross--show');
    navbarDropdown.classList.toggle('header__navbar-dropdown--show');
    headerNavbar.classList.toggle('header__navbar--mobile-bg');
});

crossIcon.addEventListener('click', function (e) {
    e.stopPropagation();
    burgerIcon.classList.toggle('header__navbar-burger--hide');
    crossIcon.classList.toggle('header__navbar-cross--show');
    navbarDropdown.classList.toggle('header__navbar-dropdown--show');
    headerNavbar.classList.toggle('header__navbar--mobile-bg');
});


let slideIndex = 0;

showSlides();
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides() {
    let i;
    
    // Cards
    let slides = document.getElementsByClassName("service__card");
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.add('fadeIn');
        slides[i].classList.remove('service__card--active');
    }
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    // Dots
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    slides[slideIndex].classList.add('service__card--active');
    dots[slideIndex].classList.add("active");
    slideIndex++;

    setTimeout(showSlides, 2000);
}




// Footer
//scroll animation popup
var lastScrollTop = 0;
var footer = document.getElementsByClassName("footer__end")[0];

window.addEventListener("scroll", function () {
    const currentScroll = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    const clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    if (currentScroll < lastScrollTop || scrollHeight - currentScroll <= clientHeight) {
        footer.style.opacity = "1";
        footer.style.visibility = "visible";
    } else {
        footer.style.opacity = "0";
        footer.style.visibility = "hidden";
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);


