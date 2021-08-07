import 'slick-slider';

(() => {
    $('.slider__items').slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 1200,
        arrows: false,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    // slidesToScroll: 3,
                }
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 2,
                    // slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    // slidesToScroll: 1,
                }
            },

        ]
    });

    $('.slider__btn_prev').on('click', function (e) {
        e.preventDefault();
        $('.slider__items').slick("slickPrev");
    });

    $('.slider__btn_next').on('click', function (e) {
        e.preventDefault();
        $('.slider__items').slick("slickNext");
    });

})();