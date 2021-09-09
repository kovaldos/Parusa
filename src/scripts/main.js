let myMap = document.getElementById('map'),
    regionName = "Санкт-Петербург",
    // regionNames = ["Санкт-Петербург, Кировский район", "Санкт-Петербург, Адмиралтейский район", "Санкт-Петербург, Василеостровский район", "Санкт-Петербург, Выборгский район", "Санкт-Петербург, Калининский район", "Санкт-Петербург, Кировский район", "Санкт-Петербург, Колпинский район",
    // "Санкт-Петербург, Красногвардейский район", "Санкт-Петербург, Красносельский район", "Санкт-Петербург, Кронштадтcкий район", "Санкт-Петербург, Курортный район", "Санкт-Петербург, Московский район", "Санкт-Петербург, Московский район", "Санкт-Петербург, Невский район", "Санкт-Петербург, Петроградский район", "Санкт-Петербург, Петродворцовый район", "Санкт-Петербург, Приморский район", "Санкт-Петербург, Пушкинский район", "Санкт-Петербург, Фрунзенский район", "Санкт-Петербург, Центральный район"],
    center = [30.313218, 59.960850],
    zoom = 10;

if (myMap) {
    ymaps.ready(init);
    function init() {
        myMap = new ymaps.Map("map", {
            center: center,
            behaviors: ['default', 'scrollZoom'],
            zoom: zoom,
            controls: ['smallMapDefaultSet']
        });

        myMap.behaviors.disable('scrollZoom');

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            //... отключаем перетаскивание карты
            myMap.behaviors.disable('drag');
        };
        // 1. Запрашиваем через геокодер район (у Яндекса этой возможности пока нет, придется пользоваться OSM)
        var url = "http://nominatim.openstreetmap.org/search";
        $.getJSON(url, { q: regionName, format: "json", polygon_geojson: 1 })
            .then(function (data) {
                $.each(data, function (ix, place) {
                    if ("relation" == place.osm_type) {
                        // 2. Создаем полигон с нужными координатами
                        var p = new ymaps.Polygon(place.geojson.coordinates);
                        // 3. Добавляем полигон на карту
                        map.geoObjects.add(p);
                    }
                });
            }, function (err) {
                console.log(err);
            });

    }
};

