let navbar = document.querySelector('.navbar');
let login_form = document.querySelector('.login');
let search_form = document.querySelector('.search-form');


//   menu of nav
document.querySelector('#menu-btn').onclick = () => {
    search_form.classList.remove('active');
    login_form.classList.remove('active');
    navbar.classList.toggle('active');
}
//  login of nav
document.querySelector('#login-btn').onclick = () => {
    search_form.classList.remove('active');
    navbar.classList.remove('active');
    login_form.classList.toggle('active');
}

//   search for responsive
document.querySelector('#search-btn').onclick = () => {
    navbar.classList.remove('active');
    login_form.classList.remove('active');
    search_form.classList.toggle('active');
}

//   theme of web 
document.querySelector('#theme-btn').onclick = (e) => {
    e.target.classList.toggle('fa-sun');
    document.body.classList.toggle('active');
}

//   review
const swiper = new Swiper('.swiper-container', {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
