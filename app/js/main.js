 
$(document).ready(function(){
    //============Аккордион==========================
    $('.sec3__accordion__item__text').slideUp();
    $('[data-accordion-link]').click(function(){
        var id = $(this).attr('data-accordion-link');
        var thiss = $(this);
        $('[data-accordion-content="'+id+'"]').slideToggle(300);
        thiss.toggleClass('active');
    });
    $('.sec3__accordion').each(function(i, el){
        $(el).find('[data-accordion-content]').eq(0).slideDown();
        $(el).find('[data-accordion-link]').eq(0).addClass('active');
    });
    //============END Аккордион==========================

    $('.sec6__slider').owlCarousel({
        items: 4,
        margin: 30,
        nav: true,
        navText: ["<img src=\"img/slider__arrow__left.svg\">","<img src=\"img/slider__arrow__right.svg\" >"],
        responsive: {
            0: {
              items: 1,
            },
            700: {
                items: 2,
            },
            1000: {
                items: 3,
            },
            1400: {
             items: 4,
            }
        }
    });

    $('.sec7__slider').owlCarousel({
        items: 4,
        margin: 30,
        nav: true,
        navText: ["<img src=\"img/slider__arrow__left.svg\">","<img src=\"img/slider__arrow__right.svg\" >"],
        responsive: {
            0: {
              items: 1,
            },
            700: {
                items: 2,
            },
            1000: {
                items: 3,
            },
            1400: {
             items: 4,
            }
        }
    });

    $(".header__nav a").mPageScroll2id({
        offset: 120,
        scrollSpeed: 900,
        keepHighlightUntilNext: true,
    });

    $(".mobile__menu__links a").mPageScroll2id({
        offset: 120,
        scrollSpeed: 900,
        keepHighlightUntilNext: true,
        onStart: function() {
            $('[data-mobile-menu]').removeClass('active');
            $('[data-mobile-menu-show]').removeClass('active');
        },
    });

    

    $('[data-mask="phone"]').each(function(i, el){
        $(el).mask("+7 (999) 999-9999");
    });


    //================Проверка чекбокса=======================
    $('form').each(function(i, el){
        var checkbox = $(el).find('input[type="checkbox"]');
        var button = $(el).find('button');
        console.log(checkbox);
        console.log(button);
        if( $(checkbox).prop("checked") === true ) {
            $(button).prop('disabled', false);
        }else {
            $(button).prop('disabled', true);
        }
        $(checkbox).change(function(){
            if( $(this).prop("checked") === true ) {
                $(button).prop('disabled', false);
                console.log('Включен');
            }else {
                $(button).prop('disabled', true);
                console.log('Выключен');
            }
        });
    });
    //================END Проверка чекбокса=======================

    //================ Модальное окно =======================
    $('[data-modal-show]').click(function(){
        var id = $(this).attr('data-modal-show');
        $('[data-modal-wrapper="'+id+'"]').css('display', 'flex');
        setTimeout(function(){
            $('[data-modal-wrapper="'+id+'"]').addClass('active');
            $('[data-modal="'+id+'"]').addClass('active');
        }, 100);
        
    });
    $('[data-modal-close]').click(function(){
        var id = $(this).attr('data-modal-close');
        $('[data-modal-wrapper="'+id+'"]').removeClass('active');
        $('[data-modal="'+id+'"]').removeClass('active');
        setTimeout(function(){
            $('[data-modal-wrapper="'+id+'"]').css('display', 'none');
        }, 300);
    });
    $('[data-modal-wrapper]').click(function(){
        if ($(event.target).closest("[data-modal]").length) return;
        var id = $(this).attr('data-modal-wrapper');
        $('[data-modal-wrapper="'+id+'"]').removeClass('active');
        $('[data-modal="'+id+'"]').removeClass('active');
        setTimeout(function(){
            $('[data-modal-wrapper="'+id+'"]').css('display', 'none');
        }, 300);
    });
    //================END Модальное окно =======================

    //================ Мобильное меню  =======================
    $('[data-mobile-menu-show]').click(function(){
        var id = $(this).attr('data-mobile-menu-show');
        $(this).toggleClass('active');
        $('[data-mobile-menu="'+id+'"]').toggleClass('active');
    });
    $('[data-mobile-menu] a').click(function(){
        var id = $(this).attr('data-mobile-menu');
        $('[data-mobile-menu="'+id+'"]').removeClass('active');
        $('[data-mobile-menu-show="'+id+'"]').removeClass('active');
    });
    //================END Мобильное меню  =======================
});