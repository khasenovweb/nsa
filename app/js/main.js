 
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
    });
    $('.sec7__slider').owlCarousel({
        items: 4,
        margin: 30,
        nav: true,
        navText: ["<img src=\"img/slider__arrow__left.svg\">","<img src=\"img/slider__arrow__right.svg\" >"],
    });

    $(".header__nav a").mPageScroll2id({
        offset: 120,
        scrollSpeed: 900,
        keepHighlightUntilNext: true,
    });

    $('[data-mask="phone"]').each(function(i, el){
        $(el).mask("+7 (999) 999-9999");
    });

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
});