
$(document).ready(function(){
    
    // AOS CDN
    AOS.init();

    // 스크롤 내릴시 header만 고정
    var headerOffset = $('header').offset();
    $(window).scroll(function(){
        if($(document).scrollTop() > headerOffset.top) {
            $('header').addClass('header-fixed');
        }
        else {
            $('header').removeClass('header-fixed');
        }
    });


    // header의 search 창 효과
    $('.header-search-box > input').focus(function(){
        $(this).parent('.header-search-box').addClass('on');
    });
    $('.header-search-box > input').blur(function(){
        $(this).parent('.header-search-box').removeClass('on');
    });

    // 타이핑효과
    new TypeIt("#companionMethods", {
        speed: 100,
        waitUntilVisible: true,
        loop: true,
    })
        .type("코딩", { delay: 300 })
        .delete(2)
        .type("파이썬")
        .pause(300)
        .delete(3)
        .type("데이터 분석")
        .pause(500)
        .delete(6)
        .type("프론트엔드")
        .pause(500)
        .delete(5)
        .type("백엔드")
        .go();

        // focus하면 타이핑효과 없애기
        $('form.main-search-box input').focus(function(){
            $('p#companionMethods').hide();
        });
        $('form.main-search-box input').blur(function(){
            $('p#companionMethods').show();
        });

        $('form.main-search-box').click(function(){
            $(this).find('input').focus();
        })

});