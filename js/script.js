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
});