$(document).ready(function () {
    const navMenuItem = $('.nav__menu');

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

    $('.section__project__slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    });

    $('.modal__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    });

    $('.over-layer').on('click', function () {
        $('.full__screen').addClass('active');
        $('.top__video__close').css('display', 'block');
        $("html, body").animate({scrollTop: 0}, "slow");

        $('body').css('overflow', 'hidden');
    });

    $('.top__video__close').on('click', function () {
        $('.full__screen').removeClass('active');
        $('.top__video__close').css('display', 'none');

        $('body').css('overflow', 'inherit');
    });

    $('.mobile__menu__icon').on('click', function () {
        $('.menu').toggleClass('mobile__menu');
        $('.menu__container').toggleClass('active');
        navMenuItem.removeClass('scrolled');
    })

    $('.section__services__item').on('click', function (elem) {
        if ($(elem.target).hasClass('hexagon__button')) {
            return;
        }

        const prevOpened = $('.section__services__container').find('.active');

        if ($(this)[0] === prevOpened[0]) {
            $(this).removeClass('active');

            return;
        } else if (prevOpened[0]) {
            prevOpened.removeClass('active')
        }

        $(this).addClass('active');
    })

    $('.section__services__item .hexagon__button').on('click', function (e) {
        e.preventDefault();
    })

    $('.blog__video__container').on('click', function () {
        if (!$(this).hasClass('active')) {
            const prevOpened = $('.section__blog__content').find('.active');
            prevOpened.removeClass('active');
            prevOpened.find('iframe').remove();

            const iframeUrl = $(this).attr('childIframe');
            const iframeNode = $('<iframe width="303" height="303" class="blog__video" src=" ' + iframeUrl + '"/>');

            $(this).append(iframeNode);

            $(this).addClass('active');
        }
    })

    $('.menu__item').on('click', function () {
        $('.menu').find('.active').removeClass('active');
        $(this).addClass('active');
    });

    $('.create__plan__modal .hexagon__shadow').on('click', function () {
        const prevOpened = $('.create__plan__modal').find('.active');

        if (prevOpened[0]) {
            prevOpened.removeClass('active')
        }

        $(this).addClass('active');
    })

    $('.service__options__close').on('click', function (e) {
        e.stopPropagation();
        $(this).parent().removeClass('active');
    })

    $('.create__plan__option .section__service__list__item').on('click', function (e) {
        e.stopPropagation();

        const prevOpened = $('.create__plan__option').find('.active');
        const parentNode = $(this).parent();

        if (parentNode[0] === prevOpened[0]) {
            parentNode.removeClass('active');

            return;
        } else if (prevOpened[0]) {
            prevOpened.removeClass('active')
        }

        parentNode.addClass('active');
    })

    $('.read__more__desc').on('click', function () {
        $('.page__description__text').toggleClass('opened')
    })

    $('[data-target]').on('click', function () {
        let datalist = $('[data-filter]');

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            datalist.fadeIn();
            return;
        }

        $('[data-target]').removeClass('active');
        $(this).addClass('active');

        datalist.css({
            display: 'none'
        });

        let targetValue = $(this).attr('data-target');
        datalist.each(function (index, item) {
            if ($(item).is(`[data-filter=${targetValue}]`)) {
                $(item).fadeIn();
            }
        })
    })

    $('.section__services__item-turned').on('click', function () {
        if ($(window).width() < 1024) {
            return;
        }
        $(this).parent().parent().find('.section__services__item.active').removeClass('active');
    });

    $('.close-service').on('click', function () {
        $(this).parent().parent().find('.section__services__item.active').removeClass('active');
    })


    let isNotTop = true
    if ($(window).scrollTop() === 0) {
        navMenuItem.addClass('scrolled');
    } else {
        navMenuItem.removeClass('scrolled');
    }

    $(window).scroll(function () {
        if (isNotTop && $(window).scrollTop() !== 0) {
            navMenuItem.removeClass('scrolled').addClass('scroll');
            isNotTop = false
        } else if ($(window).scrollTop() === 0) {
            navMenuItem.addClass('scrolled').removeClass('scroll');
            isNotTop = true
        }
    });
});


