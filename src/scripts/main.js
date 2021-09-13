let myMap = document.getElementById('map'),
    regionNames = ["Санкт-Петербург, Кировский район", "Санкт-Петербург, Адмиралтейский район", "Санкт-Петербург, Василеостровский район", "Санкт-Петербург, Выборгский район", "Санкт-Петербург, Калининский район", "Санкт-Петербург, Колпинский район", "Санкт-Петербург, Красногвардейский район", "Санкт-Петербург, Красносельский район", "Санкт-Петербург, Кронштадтcкий район", "Санкт-Петербург, Курортный район", "Санкт-Петербург, Московский район", "Санкт-Петербург, Невский район", "Санкт-Петербург, Петроградский район", "Санкт-Петербург, Петродворцовый район", "Санкт-Петербург, Приморский район", "Санкт-Петербург, Пушкинский район", "Санкт-Петербург, Фрунзенский район", "Санкт-Петербург, Центральный район"],
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
   
        // regionNames.forEach (regionName => {
        //     // 1. Запрашиваем через геокодер район (у Яндекса этой возможности пока нет, придется пользоваться OSM)
        //     let url = "http://nominatim.openstreetmap.org/search";
        //     $.getJSON(url, { q: regionName, format: "json", polygon_geojson: 1 })
        //         .then(function (data) {
        //             $.each(data, function (ix, place) {
        //                 if ("relation" == place.osm_type) {
        //                     // 2. Создаем полигон с нужными координатами и задаем ему необходимые свойства
        //                     let myPolygon = new ymaps.Polygon((place.geojson.coordinates), {}, {
        //                       fillColor: 'FFFFFF00',
        //                       strokeColor: 'FFFFFF00',
        //                       myRegionName: regionName.replace("Санкт-Петербург, ", ""), 
        //                     });
        //                     myPolygon.events.add('mouseenter', function (e) {
        //                       let target = e.get('target');
        //                       target.options.set('fillColor') == 'FFFFFF80'
        //                     });
        //                     myPolygon.events.add('mouseleave', function (e) {
        //                       let target = e.get('target');
        //                       target.options.set('fillColor', 'FFFFFF00')
        //                     });
        //                     myPolygon.events.add('click', function (e) {
        //                       let target = e.get('target');
        //                       let input = document.querySelector('.map__choose-box-input');
        //                       let district = target.options.get('myRegionName')
        //                       input.innerHTML = district;
        //                     })
                            
        //                     // 3. Добавляем полигон на карту
        //                     myMap.geoObjects.add(myPolygon);
                                                           
        //                 }
        //             });
        //         }, function (err) {
        //             console.log(err);
        //     });
        // })            
    }
};


const phoneMask = IMask(
    document.getElementById('phone-number'), {
        mask: '+{7} (000) 000 0000',
        prepare: (appended, masked) => {
            if (appended === '8' && masked.value === '') {
                return '';
            }
            return appended;
        },
    });

    const popupLinks = document.querySelectorAll(".popup-link");
    const body = document.querySelector("body");
    const lockPadding = document.querySelectorAll(".lock-padding");
  
    let unlock = true;
  
    const timeout = 800;
  
    if (popupLinks && body && lockPadding && unlock && timeout) {
      if (popupLinks.length > 0) {
        for (let index = 0; index < popupLinks.length; index++) {
          const popupLink = popupLinks[index];
          popupLink.addEventListener("click", function (e) {
            const popupName = popupLink.getAttribute("href").replace("#", "");
            const currentPopup = document.getElementById(popupName);
            popupOpen(currentPopup);
            e.preventDefault;
          });
        }
      }
  
      const popupCloseIcon = document.querySelectorAll(".close-popup");
      if (popupCloseIcon.length > 0) {
        for (let index = 0; index < popupCloseIcon.length; index++) {
          const el = popupCloseIcon[index];
          el.addEventListener("click", function (e) {
            popupClose(el.closest(".popup"));
            e.preventDefault;
          });
        }
      }
  
      function popupOpen(currentPopup) {
        if (currentPopup && unlock) {
          const popupActive = document.querySelector(".popup._active");
          if (popupActive) {
            popupClose(popupActive, false);
          } else {
            bodyLock();
          }
          currentPopup.classList.add("_active");
          currentPopup.addEventListener("click", function (e) {
            if (!e.target.closest(".popup__content")) {
              popupClose(e.target.closest(".popup"));
            }
          });
        }
      }
  
      function popupClose(popupActive, doUnlock = true) {
        if (unlock) {
          popupActive.classList.remove("_active");
          if (doUnlock) {
            bodyUnlock();
          }
        }
      }
  
      function bodyLock() {
        const lockPaddingValue =
          window.innerWidth -
          document.querySelector("body").offsetWidth +
          "px";
  
        if (lockPadding.length > 0) {
          for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
          }
        }
        body.style.paddingRight = lockPaddingValue;
        body.classList.add("_locked");
  
        unlock = false;
        setTimeout(function () {
          unlock = true;
        }, timeout);
      }
  
      function bodyUnlock() {
        setTimeout(function () {
          if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
              const el = lockPadding[index];
              el.style.paddingRight = "0px";
            }
          }
          body.style.paddingRight = "0px";
          body.classList.remove("_locked");
        }, timeout);
  
        unlock = false;
        setTimeout(function () {
          unlock = true;
        }, timeout);
      }
  
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
          const popupActive = document.querySelector(".popup._active");
          popupClose(popupActive);
        }
      });
    }

    const chooseBtn = document.querySelector('.map__choose-box-btn');
    let districtValue = document.querySelector('.map__choose-box-input').innerHTML;
    if(chooseBtn && districtValue) {
      chooseBtn.addEventListener('click', () => {
        let formInput = document.getElementById('district-value');
        formInput.innerHTML = districtValue;
        console.log(formInput);
      })
    }
      

   

