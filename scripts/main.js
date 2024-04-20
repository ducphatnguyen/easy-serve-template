
/* Header */
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

/* Service */
// Slider Mobile
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('.service__card-list');
    const slides = document.querySelectorAll('.service__card-body');
    const dotsContainer = document.querySelector('.dots');

    let currentIndex = 0;
    // Tạo các dấu chấm tương ứng với số lượng card
    slides.forEach((slide, i) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dotsContainer.appendChild(dot);

        // Gán sự kiện click cho mỗi dấu chấm để chuyển đến card tương ứng
        dot.addEventListener('click', function () {
            showSlide(i);
            currentIndex = i;
        });
    });

    function nextSlide() {
        let nextIndex = currentIndex + 1;
        if (nextIndex === slides.length) {
            nextIndex = 0;
        }
        showSlide(nextIndex);
        currentIndex = nextIndex;
    }

    function showSlide(index) {
        // Ẩn tất cả các card
        slides.forEach(slide => {
            slide.classList.remove('service__card-body--active');
        });
        // Hiển thị card tương ứng với chỉ số index
        slides[index].classList.add('service__card-body--active');
        // Thay đổi class của carousel để áp dụng transform
        carousel.className = 'service__card-list'; // Đảm bảo xóa hết các class trước
        if (index === 0) {
            carousel.classList.add('service__card-list--translate-1');
        } else if (index === 1) {
            carousel.classList.add('service__card-list--translate-2');
        } else {
            carousel.classList.add('service__card-list--translate-3');
        }

        // Highlight dấu chấm tương ứng
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, dotIndex) => {
            dot.classList.remove('active');
            if (dotIndex === index) {
                dot.classList.add('active');
            }
        });
    }
    setInterval(nextSlide, 3000); // Đổi slide mỗi 3 giây (3000ms)
});


/* Footer */
// 1.scroll animation popup
let lastScrollTop = 0;
let footer = document.getElementsByClassName("footer__end")[0];
window.addEventListener("scroll", function () {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;
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


// Hàm kiểm tra xem phần tử có trong tầm nhìn hay không
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Hàm thực hiện hiệu ứng animate khi phần tử vào tầm nhìn
function animateOnScroll() {
    const elements = document.querySelectorAll('.animated');
    elements.forEach(function(element) {
        if (isInViewport(element)) {
            const animation = element.getAttribute('data-animate');
            element.classList.add(animation);
        }
    });
}

// Gọi hàm animateOnScroll khi cuộn trang hoặc thay đổi kích thước cửa sổ
document.addEventListener('scroll', animateOnScroll);
document.addEventListener('resize', animateOnScroll);
// // Gọi hàm animateOnScroll khi trang được tải
// document.addEventListener('DOMContentLoaded', animateOnScroll);

// Click and Scroll 
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#scroll-button').addEventListener('click', function() {
        const scrollTarget = document.querySelector('#scroll-position');
        scrollTarget.scrollIntoView({ behavior: 'smooth' });
    });
});

// Lấy modal và nút mở modal
const modal = document.querySelector('.modal');
const openModalBtn = document.querySelector('.button-login');
openModalBtn.addEventListener('click', function() {
    modal.classList.toggle('show-modal');
});

// Đóng modal khi người dùng click vào nút đóng
var closeModalBtns = document.querySelectorAll('.close-modal');
closeModalBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        // Xóa class 'show' khỏi modal để ẩn nó đi
        modal.classList.remove('show-modal');
    });
});

const loginForm = document.querySelector('.auth-form__login');
const registerForm = document.querySelector('.auth-form__register');

const switchRegister = document.querySelector('#switch-register');
const switchLogin = document.querySelector('#switch-login');

// Formlogin (onClick -> Regist)
switchRegister.addEventListener('click', function (e) {
    e.stopPropagation();
    // console.log("test1");
    registerForm.classList.remove('slide-out--back');
    loginForm.classList.remove('slide-in--back');

    loginForm.classList.add('slide-in');
    registerForm.classList.add('slide-out');

});

switchLogin.addEventListener('click', function (e) {
    e.stopPropagation();
    // console.log("test2");

    registerForm.classList.add('slide-out--back');
    loginForm.classList.add('slide-in--back');

});


