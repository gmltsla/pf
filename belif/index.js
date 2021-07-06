$(document).ready(function () {
    
    $('.topMenu > ul > li').hover(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
    },function(){
        $(this).removeClass('selected');
    }
   );
    
    $('.rightMenu > ul > li').hover(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
    },function(){
        $(this).removeClass('selected');
    }
   );
    
//    $('.rightMenu > ul > li > a').click(function(){
//       //$(this).next().css('display','block');
//        if($(this).next().css('display')== 'block'){
//             $(this).next().css('display','none');
//        } else{$(this).next().css('display','block');}
//    
//                                   });
   
    $('.rightMenu > ul > li.search > a').click(function(){
        if($(this).addClass('select').next().css('display')=='none'){
             $(this).addClass('select').next().css('display','block');
        } else { $(this).removeClass('select').next().css('display','none');}
    });






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
        mouseDrag: true,
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
        mouseDrag: true,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });


   $('.youtube').click(function() {
    var $iframe = $(this).find('> iframe');
    var $playBtn = $(this).find('.play-btn');
    
    var src = $iframe.attr('data-src');
    $iframe.attr('src', src);
    
    setTimeout(function() {
        $playBtn.remove();
    }, 500);
   });


});
