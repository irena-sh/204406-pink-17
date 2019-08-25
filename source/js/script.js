var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");
var pageHeader = document.querySelector(".page-header");
var pageIntro = document.querySelector(".opening");

navMain.classList.remove("main-nav--nojs");
pageHeader.classList.remove("page-header--full");
pageIntro.classList.remove("opening--short");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
    if (pageHeader.classList.contains("page-header--full")) {
      pageHeader.classList.remove("page-header--full");
    } else {
      pageHeader.classList.add("page-header--full");
    };
    if (pageIntro.classList.contains("opening--short")) {
      pageIntro.classList.remove("opening--short");
    } else {
      pageIntro.classList.add("opening--short");
    };
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
    pageHeader.classList.remove("page-header--full");
    pageIntro.classList.remove("opening--short");
  }
});

var mapImage = document.getElementById("map");

if (mapImage) {
  var map ="";
  google.maps.event.addDomListener(window, "load", init);
  google.maps.event.addDomListener(window, "resize", m_res );
  function init() {
      var mapDislay = {
        zoom: 15,
        mapTypeControl: false,
        zoomControl: true,
        scrollwheel: false,
        zoomControlOptions: {position: google.maps.ControlPosition.LEFT_CENTER},
      streetViewControl: false,
      center: new google.maps.LatLng(59.936287, 30.321047),
    };

    mapImage.classList.add("contacts-map--map-loaded");
    map = new google.maps.Map(mapImage, mapDislay);
    var image = {
      url: "img/icon-map-marker.svg",
      size: new google.maps.Size(36, 36),
      scaledSize: new google.maps.Size(36, 36),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(18, 18)
    };

    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(59.936287, 30.321047),
      map: map,
      optimized: false,
      icon: image
    });
    m_res();
  }

  function m_res(){
    google.maps.event.trigger(map, "resize");
    map.panTo(new google.maps.LatLng(59.936287, 30.321047));
  }
}
