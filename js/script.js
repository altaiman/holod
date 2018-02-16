$(function(){
    $('.slider__slides').flickity({
        wrapAround: true,
        contain: true,
        pageDots: false
    });

    if ($('#map').get(0)) {
        ymaps.ready(init);
        
        var myMap, 
            myPlacemark;

        function init(){ 
            myMap = new ymaps.Map("map", {
                center: [55.76, 37.64],
                zoom: 7
            }); 
            
            myPlacemark = new ymaps.Placemark([55.76, 37.64], {
                hintContent: 'Москва!',
                balloonContent: 'Столица России'
            });
            
            myMap.geoObjects.add(myPlacemark);
        }
    }

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
});