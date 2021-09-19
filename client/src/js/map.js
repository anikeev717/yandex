function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(46.768435061051605, 36.77059260736541),
    zoom: 13,
  });
  const icons = {
    item: {
      icon: "../static/img/icon/marker_icon.svg",
    },
  };
  const point = [
    {
      position: new google.maps.LatLng(46.768435061051605, 36.77059260736541),
      type: "item",
    },
    {
      position: new google.maps.LatLng(46.75538148897431, 36.80164932692395),
      type: "item",
    },
    {
      position: new google.maps.LatLng(46.785310807307134, 36.790683540415436),
      type: "item",
    },
    {
      position: new google.maps.LatLng(46.76849482011075, 36.76205623530817),
      type: "item",
    },
    {
      position: new google.maps.LatLng(46.78365061183836, 36.76194591343441),
      type: "item",
    },
    {
      position: new google.maps.LatLng(46.76902745174394, 36.77142386925142),
      type: "item",
    },
  ];

  point.forEach((el) => {
    const marker = new google.maps.Marker({
      position: el.position,
      icon: icons[el.type].icon,
      map: map,
    });
    const infowindow = new google.maps.InfoWindow({
      content: '<p class="location__info"> Yandex-капсула </p>',
    });
    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
      });
    });
  });
}

window.initMap = initMap;
