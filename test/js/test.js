$(document).ready(function () {
    $('.mainImgSlider').each(function () {
        $(this).slick({
            autoplay: true,
            autoplaySpeed: 4000,
            dots: false,
            fade: true,
            pauseOnHover: false,
            speed: 1800,
        });
    });
    $('.menuBtn_sp').on('click',function(){
        $(this).toggleClass('is-active');
        $('.sp_menuArea').toggleClass('is-active');
        $('.header_area').toggleClass('is-active');
    });
    function mainTopMargin() {
        var $headerH = $('.header_area').outerHeight();
        console.log($headerH);
        $('.main_area').css({
            'margin-top': $headerH
        });
    }

    function scrollHeader(winW) {
        var $winW = $(window).width(),
            $header = $('.header_area'),
            $sitenavLeft = $('.sitenav_l'),
            $sitenavRight = $('.sitenav_r');

        var $headerH = $header.outerHeight();
        if ($winW > winW) {
            $(window).on('scroll', function () {
                var $scrollTop = $(window).scrollTop();
                var $winH = $(window).height();
                if ($scrollTop > $winH - $headerH) {
                    $sitenavLeft.addClass('is-active');
                    $sitenavRight.addClass('is-active');
                    $header.addClass('is-active-position');
                } else {
                    $sitenavLeft.removeClass('is-active');
                    $sitenavRight.removeClass('is-active');
                    $header.removeClass('is-active-position');
                }
            });
        }
    }

    function langmenubtn() {
        var $menuBtn = $('.lang_menu_area');
        $menuBtn.on('click', function () {
            $(this).toggleClass('is-active');
            $('.lang_con').toggleClass('is-active');
        });
    }

    function newsSliderLightBox() {
        var $targetList = $('.newsSlider li');
        $targetList.each(function () {
            $(this).on('click', function () {
                var $targetImgUrl = $(this).find('img').attr('src'),
                    $targetTitle = $(this).find('.newsTitle').text(),
                    $targetText = $(this).find('.newsTxt').text(),
                    $lightBoxArea = $('.lightBox_area'),
                    $lightBoxImgArea = $('.lightBox_area .imgBlock');
                console.log($targetImgUrl);
                $lightBoxArea.addClass('is-active');
                $('.lightBox_area .title02_style01').text($targetTitle);
                $('.lightBox_area .textCon').text($targetText);
                $lightBoxImgArea.css({
                    'background-image': "url('" + $targetImgUrl + "')",
                });
            });
            $('.lightBox_area').on('click', function () {
                $(this).removeClass('is-active');
            });
        });
    }

    function returnTop() {
        $('.returnTopBtn').on('click', function () {
            $('html,body').stop().animate({
                scrollTop: 0
            }, 1000);
        });
    }

    function fadeIn(WinW) {
        var $target = $('.block_hidden');
        var $winW = $(window).outerWidth(),
            $winH = $(window).height();
        if ($winW > WinW) {
            $(window).on('scroll', function () {
                $target.each(function () {
                    var $targetPositionY = $(this).offset().top;
                    var $scrollTop = $(window).scrollTop();
                    if ($scrollTop > $targetPositionY - $winH + 300) {
                        $target.addClass('is-active');
                    }
                });
            });
        }


    }

    // mainTopMargin();
    scrollHeader(980);
    langmenubtn();
    newsSliderLightBox();
    returnTop();
    fadeIn(0);

});

function spMenu(winW) {
    $scrollTop = $(window).scrollTop();
    $headerTop = $('.header_area').offset().top;
    console.log($scrollTop);
    console.log($headerTop);
    $winW = $(window).width();
    $winH = $(window).height();
    if ($winW < winW) {
        if ($scrollTop > $headerTop) {
            $('.header_area').addClass('sp-active');
        } else if($scrollTop < $winH){
            $('.header_area').removeClass('sp-active');
        }
    }
}

$(window).on('scroll', function () {
    spMenu(690);
});