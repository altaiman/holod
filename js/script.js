$(function(){
    $('.slider__slides').flickity({
        wrapAround: true,
        contain: true,
        pageDots: false,
        autoPlay: 5000
    });

    $('.mobile__menu-btn').on('click', function() {
        $('.mobile .open:not(.mobile__menu)').removeClass('open');
        $(this).parent().toggleClass('open');
    })

    $('.mobile__search-btn').on('click', function() {
        $('.mobile .open:not(.mobile__search)').removeClass('open');
        $(this).parent().toggleClass('open');
    })

    $('[data-modal]').on('click', function() {
        var id = $(this).data('modal');

        $('#'+id).bPopup({
            closeClass:'modal__close'
        });
    });

    $('select').niceSelect();


    $(window).on('scroll', function() {
        if ($(window).scrollTop() >= 600) {
            $('.f-block__img svg').each(function(i, svg) {
                $(svg).addClass('animated');
            });
        }
    });

    // блик на логотипе
    setInterval(function() {
        $('.logo img').attr('src', 'img/logogif.gif')
    }, 5000)

    $('.f-block').hover(function(e) {
        var tip = $(this).find('.f-block__tip').get(0);

        if (tip) {
            $(tip).fadeIn(200)
        }
    }, function(e) {
        $('.f-block__tip').hide();
    });

    // фото в новостях
    $('.gallery__photo').on('click', function(e) {
        var src = $(this).data('img'),
            img = '<img src="'+src+'"/> '

        var bpop = $(img).bPopup().reposition(100);

        // bpop.reposition(100);
    });
});