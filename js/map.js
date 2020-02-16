ymaps.ready(init);

    function init () {
        var myMap = new ymaps.Map("map", {
            // Центр карты, указываем коордианты
            center:[59.939147, 30.321522],
            // Масштаб, тут все просто
            zoom: 17,
            // Отключаем все элементы управления
            controls: []
        }); 
                
        var myGeoObjects = [];
        
        // Наша метка, указываем коордианты
        myGeoObjects = new ymaps.Placemark([59.938858, 30.323157],{
                        balloonContentBody: 'Приходите! Будем рады познакомиться лично.',
                        },{
                        iconLayout: 'default#image',
                        // Путь до нашей картинки
                        iconImageHref: 'img/map-marker.png', 
                        // Размер по ширине и высоте
                        iconImageSize: [231, 190],
                        // Смещение левого верхнего угла иконки относительно
                        // её «ножки» (точки привязки).
                        iconImageOffset: [-50, -190]
        });
                    
        var clusterer = new ymaps.Clusterer({
            clusterDisableClickZoom: false,
            clusterOpenBalloonOnClick: false,
        });
        
        clusterer.add(myGeoObjects);
        myMap.geoObjects.add(clusterer);
        // Отлючаем возможность изменения масштаба
        myMap.behaviors.disable('scrollZoom');
    }
