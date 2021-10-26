$(document).ready(function () {
    // 메뉴바 - 메뉴1의 li에 마우스를 올리면 해당 요소를 `선택` 하겠다.
    $('.menu-bar .menu-1 > ul > li').mouseenter(function () {
        $(this).siblings('.selected').removeClass('selected');
        $(this).addClass('selected');
    });

    $('.menu-2 > ul > li:last-child > a').click(function () {
         $('.search-wrap').css('display','block');
         $('.search-top .sub-menu-overlay').addClass('active');
//        $('.search-wrap').fadeIn('fast', function () {
//            $('.search-top .sub-menu-overlay').addClass('active');
//        });
    });

    $('.search .btn_close').click(function () {
        $('.search-wrap').css('display','none');
        $('.search-top .sub-menu-overlay').removeClass('active');
//        $('.search-wrap').fadeOut('fast', function () {
//             $('.search-top .sub-menu-overlay').removeClass('active');
//        });
    });
    
    $(window).keyup(function(e) {
        if ( e.keyCode == 27 ) {
            $('.search-wrap').fadeOut('fast', function () {});
        }
    });

    // 비주얼 배너 페이드아웃 슬라이드
    $('.carousel-1 > .owl-carousel').owlCarousel({
        autoplay: true, // 오토 플레이
        autoplayTimeout: 4000, // 오토 플레이 시에 다음 슬라이드로 넘어가는 주기, 2초
        autoplayHoverPause: true, // 마우스 올리면 오토 플레이 멈춤
        loop: true, // 끝에서 다시 처음으로 시작
        margin: 0,
        animateOut: 'fadeOut',
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            }
        }
    })

    $('.carousel-2 > .owl-carousel').owlCarousel({
        autoplay: true, // 오토 플레이
        autoplayTimeout: 4000, // 오토 플레이 시에 다음 슬라이드로 넘어가는 주기, 2초
        autoplayHoverPause: true, // 마우스 올리면 오토 플레이 멈춤
        loop: true, // 끝에서 다시 처음으로 시작
        margin: 0,
        animateOut: 'fadeOut',
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            }
        }
    })


    $('.carousel-3 > .owl-carousel').owlCarousel({
        autoplay: true, // 오토 플레이
        autoplayTimeout: 4000, // 오토 플레이 시에 다음 슬라이드로 넘어가는 주기, 2초
        autoplayHoverPause: true, // 마우스 올리면 오토 플레이 멈춤
        loop: true, // 끝에서 다시 처음으로 시작
        margin: 0,
        animateOut: 'fadeOut',
        nav: false,
        dots: false,
        mouseDrag: false,
        responsive: {
            0: {
                items: 1
            }
        }
    })

    $('.carousel-4 > .owl-carousel').owlCarousel({
        autoplay: true, // 오토 플레이
        autoplayTimeout: 4000, // 오토 플레이 시에 다음 슬라이드로 넘어가는 주기, 2초
        autoplayHoverPause: true, // 마우스 올리면 오토 플레이 멈춤
        loop: true, // 끝에서 다시 처음으로 시작
        margin: 0,
        animateOut: 'fadeOut',
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            }
        }
    })



    var box5_menu1_ul_li_clicked = function (index) {
        var $clickedBtn = $('.box-2 .menu-1 > div > ul > li').eq(index);

        var width = $clickedBtn.width();
        var left = $clickedBtn.position().left + 15;

        $('.box-2 .menu-1 .menu-1-item-bottom').css({
            width: width + 'px',
            left: left + 'px'
        });

        $('.box-2 .body > ul > li.active').removeClass('active');
        $('.box-2 .body > ul > li').eq(index).addClass('active');
    };

    $('.box-2 .menu-1 > div > ul > li').click(function () {
        box5_menu1_ul_li_clicked($(this).index());
    });

    box5_menu1_ul_li_clicked(0);



});
