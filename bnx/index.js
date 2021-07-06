$(document).ready(function () {

    $('.d_nav > ul > li').click(function () {
        $(this).children('ul').css('display', 'block');
        $(this).children('ul').mouseover(function () {
            $(this).css('display', 'block');
        }).mouseleave(function () {
            $(this).css('display', 'none');
        })

    });

    $('.m_menu_btn').click(function () {

        if ($('.m_menu').css('display') == 'none') {
            $(this).addClass('on');
            $('.m_menu').css('display', 'block');
        } else {
            $(this).removeClass('on');
            $('.m_menu').css('display', 'none');
        }
    });

    // $('.m_menu_btn').mouseenter(function(){
    //  $(this).css('background','#000');
    //    $('.m_menu_btn a span').css('background','#fff');
    // }) .mouseleave(function(){
    //  $(this).css('background','#fff');
    //   $('.m_menu_btn a span').css('background','#000');
    // });

    $('.m_sns_btn').click(function () {

        if ($('.m_sns').css('display') == 'none') {
            $('.m_sns').css('display', 'block'),
            $('.m_sns_bg').css('display', 'block');
        } else {
            $('.m_sns').css('display', 'none'),
            $('.m_sns_bg').css('display', 'none');
        }

    });

    $('.m_menu ul > li').click(function () {
        if ($(this).children('ul').css('display') == 'none') {
            $(this).children('ul').css('display', 'block');
        } else {
            $(this).children('ul').css('display', 'none');
        }

    });




    $('.carousel-1 > .owl-carousel').owlCarousel({
        autoplay: true, // 오토 플레이
        autoplayTimeout: 3000, // 오토 플레이 시에 다음 슬라이드로 넘어가는 주기, 2초
        autoplayHoverPause: true, // 마우스 올리면 오토 플레이 멈춤
        loop: true, // 끝에서 다시 처음으로 시작
        margin: 0,
        animateOut: 'fadeOut',
        mouseDrag: false,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            }
        }
    });

    $('.carousel-2 > .owl-carousel').owlCarousel({
        autoplay: true, // 오토 플레이
        autoplayTimeout: 3000, // 오토 플레이 시에 다음 슬라이드로 넘어가는 주기, 2초
        autoplayHoverPause: true, // 마우스 올리면 오토 플레이 멈춤
        loop: true, // 끝에서 다시 처음으로 시작
        margin: 0,
        animateOut: 'fadeOut',
        mouseDrag: false,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });


    // coordi.html
    $('.season_date ul li:first-child').click(function () {
        //  $(this).siblings().css('display','block');
        if ($(this).siblings().css('display') == 'none') {
            $(this).siblings().css('display', 'block');
        } else {
            $(this).siblings().css('display', 'none');
        }

    });

    // store.html

    $('.store_list a').click(function () {
        if ($(this).next().css('display') == 'none') {
            $(this).next().css('display', 'block');
        } else {
            $(this).next().css('display', 'none');
        }
    });

    // faq.html

    $('.faq_list dt').click(function () {
        if ($(this).next().css('display') == 'none') {
            $(this).next().css('display', 'block');
            $(this).addClass('on');
        } else {
            $(this).next().css('display', 'none');
            $(this).removeClass('on');
        }
    });
    
    
    $('.faq-menu-bar .menu-1 > ul > li').click(function() {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    
    var index = $(this).index();
    
    $('.faq-content-bar > div > ul > li.active').removeClass('active');
    $('.faq-content-bar > div > ul > li').eq(index).addClass('active');
});

$('.faq-menu-bar.mobile').click(function() {
    $(this).toggleClass('open');
});

//$(window).resize(function() {
//    if ( $(window).width() <= 1000 ) {
//        $('.faq-menu-bar').addClass('mobile');
//        $('.faq-menu-bar').removeClass('open');
//    }
//    else {
//        $('.faq-menu-bar').removeClass('mobile');
//    }
//});










});
