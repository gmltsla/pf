$(document).ready(function () {

    $('.depth1 > li').hover(function () {
        $(this).addClass('selected').siblings().removeClass('selected');
        $(this).children('.depth2Box').css('display', 'block');
    }, function () {
        $(this).children('.depth2Box').css('display', 'none');
        $(this).removeClass('selected');
    });



    $('.btnSearch').click(function () {
        if ($('.search').css('display') == 'block') {
            $('.search').css('display', 'none')
        } else {
            $('.search').css('display', 'block')
        }
    });

    $('.search').hover(function () {
            $(this).css('display', 'block')
        },
        function () {
            $(this).css('display', 'none')
        }
    );

   // $('.btnAllmenu').click(function () {
   //     if ($('.allMenu').css('display') == 'none') {
   //         $('.allMenu').css('display', 'block')
   //     } else {
   //         $('.allMenu').css('display', 'none')
   //     }
   // });

    // $('.btnAllmenu').click(function () {
    //     if ($(window).width() <= 1000) {
    //         $('.allMenu').css('display', 'none');
    //         $('.m_allMenu').css('display', 'block');
    //     } else {
    //         $('.allMenu').css('display', 'block');
    //         $('.m_allMenu').css('display', 'none');
    //     }
    // });

     $('.btnAllmenu').click(function () {
        if ($(window).width() <= 1000 || $('.allMenu').css('display') == 'block') {
            $('.allMenu').css('display', 'none');
            $('.m_allMenu').css('display', 'block');
        } else {
            $('.allMenu').css('display', 'block');
            $('.m_allMenu').css('display', 'none');
        }
    });



    $('.allMenu').hover(function () {
            $(this).css('display', 'block')
        },
        function () {
            $(this).css('display', 'none')
        }
    );

    $('.m_allMenu .depth2 > li h2').click(function(){
     if($(this).next('ul').css('display')=='none'){
         $(this).addClass('active').siblings().removeClass('active')
         $(this).next('ul').css('display','block');
     } else {
         $(this).removeClass('active');
         $(this).next('ul').css('display','none');
     }
    });

    $('.bgModal').click(function(){
        $('.m_allMenu').css('display','none');
    });




    $('.youtube').click(function() {

    var $iframe = $(this).find('> iframe');
    var $playBtn = $(this).find('.play-btn');

    var src = $iframe.attr('data-src');
    $iframe.attr('src', src);

        $(this).css('height','calc(100%)');
        $(this).css('background','none');
        $(this).children('.play-btn').css('display','none');
        $(this).next('div').css('display','none');
        $(this).siblings('.btnMore2').css('display','none');

    setTimeout(function() {
        $playBtn.remove();
    }, 500);
   });


    $('.carousel-1 > .owl-carousel').owlCarousel({
        autoplay: true, // 오토 플레이
        autoplayTimeout: 3000, // 오토 플레이 시에 다음 슬라이드로 넘어가는 주기, 2초
        autoplayHoverPause: true, // 마우스 올리면 오토 플레이 멈춤
        loop: true, // 끝에서 다시 처음으로 시작
        margin: 0,
        animateOut: 'fadeOut',
        mouseDrag: true,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            }
        }
    });

});
