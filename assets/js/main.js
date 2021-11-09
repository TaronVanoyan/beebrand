$(document).ready(function () {
    $('.section__partners__slide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.slick-prev'),
        nextArrow: $('.slick-next'),
        // fade: true,
        // autoplay: true,
        // autoplaySpeed: 2000,
    });

    $('.top__video').on('click', function () {
        $('.full__screen').addClass('active');

        $('body').css('overflow', 'hidden');
    });

    $('.top__video__close').on('click', function () {
        $('.full__screen').removeClass('active');

        $('body').css('overflow', 'inherit');
    });

    $('.mobile__menu__icon').on('click', function () {
        $('.menu').toggleClass('mobile__menu')
    })
});