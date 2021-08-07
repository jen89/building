import 'slick-slider';

(() => {
    $('.menu-btn').on('click', function () {
        $('.menu__list').slideToggle();
    });

})();
(() => {
    $('.header__slider-items').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1200,
        autoplay: true,
        fade: true
    });

})();
