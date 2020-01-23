$(document).ready(function () {


    // goTop_btn script

    var btnToTop = $(".goTop_btn");

    btnToTop.click(function () {
        $("html, body").animate(
            {
                scrollTop: 0
            },
            1000
        );
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            btnToTop.fadeIn();
        } else {
            btnToTop.fadeOut();
        }
    });

    // dynamic active class

    $(window).scroll(function () {
        $('.section').each(function () {
            if ($(window).scrollTop() > $(this).offset().top - 100) {
                var sectionId = $(this).attr('id');
                $('nav ul li').removeClass('open');
                $('nav ul li[data-scroll="' + sectionId + '"] ').addClass('open');
            }
        });
    });

    // Home Slider
    $(".Modern-Slider").slick({
        autoplay: true,
        autoplaySpeed: 7000,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        dots: true,
        pauseOnDotsHover: true,
        cssEase: 'linear',
        fade: true,
        draggable: false,
        prevArrow: '<button class="PrevArrow"></span></button>',
        nextArrow: '<button class="NextArrow"></span></button>',
        customPaging: function (slider, i) {
            var thumbnail = $(slider.$slides[i]).data('thumbnail');
            return '';
        },
    });


    // amenities slider 


    $(".owl-stage").slick({
        autoplay: true,
        autoplaySpeed: 7000,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        pauseOnHover: false,
        dots: false,
        pauseOnDotsHover: true,
        cssEase: 'linear',
        draggable: false,
        prevArrow: ".owl-prev",
        nextArrow: ".owl-next",
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
})

new WOW().init();