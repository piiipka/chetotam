$('.header__burger').click(function(){
    $('.header__nav').addClass('open');
});

$('.nav__krest').click(function(){
    $('.header__nav').removeClass('open');
});

$(window).scroll(function(){
    let scrolled = $(window).scrollTop();

    if(scrolled > 700) {
        $('.main__banner').addClass('absolute');
        $('.main__comments').addClass('absolute');
    } else if(scrolled < 700){
        $('.main__banner').removeClass('absolute');
        $('.main__comments').removeClass('absolute');
    }
    if(scrolled > 50) {
        $('.main__toTop').addClass('goUp');
    } else {
        $('.main__toTop').removeClass('goUp');
    }
});
$('.main__toTop').click(function(){
    $('html, body').animate({scrollTop: 0}, 600)
})

$('.contact').click( function(){
    $('.main__cont').addClass('cont__open');
    $('.main, .header, .footer').addClass('close');
});

$('.cont__krest').click( function(){
    $('.main__cont').removeClass('cont__open');
    $('.main, .header, .footer').removeClass('close')
});

$('.comments__btn').click(function(){
    $('.comments__block').addClass('open__block');
    $('body').addClass('dont__scroll');
});
$('.comments__back').click(function(){
    $('.comments__block').removeClass('open__block');
    $('body').removeClass('dont__scroll');
});

$('.banner__button').click(function(){
    $('.main__banner').addClass('banner__open');
    $('body').addClass('dont__scroll');
});

$('.banner__back').click(function(){
    $('.main__banner').removeClass('banner__open');
    $('body').removeClass('dont__scroll');
});