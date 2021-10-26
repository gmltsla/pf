$(document).ready(function () {

$(".headerInner ul li a").on("click", function(){
        var divName = $(this).attr("id"),
            topPosition = $("."+ divName).offset().top;
        $('html, body').animate({
            scrollTop: topPosition - 79
        }, 700);
        return false; //리턴펄스로 스크롤이 최상위로 갔다가 돌아오는 현상 없어짐
    });


 $(window).scroll(function () {
        if ($(window).scrollTop() > 1040) {
            $('#header .innerBox').addClass('bg');
        } else {
            $('#header .innerBox').removeClass('bg');
        }
    })

});
