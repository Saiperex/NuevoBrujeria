//Menu deslizable
const menuIcon = document.querySelector('.fa-bars-staggered');
const menu = document.querySelector('.menu_mid');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('menu_activo');
});
//Swiper para servicios
var swiper = new Swiper(".servicios_swiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    centeredSlidesBounds: true,
    spaceBetween: 30,
    lazy: true,
    loop: false,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
});
