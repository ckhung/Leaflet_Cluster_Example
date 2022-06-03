/* jshint esversion: 6 */
// See post: http://asmaloney.com/2015/06/code/clustering-markers-on-leaflet-maps

$.getJSON('maps/markers.json', function(markers) {
  main(markers);
});

function main(markers) {
  var map = L.map('map', {
    center: [23.611, 120.768],
    zoom: 7,
  });
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: ['a', 'b', 'c'],
  }).addTo(map);
  
  var myURL = jQuery('script[src$="leaf-demo.js"]')
    .attr('src')
    .replace('leaf-demo.js', '');
  
  var myIcon = L.icon({
    iconUrl: myURL + 'images/pin24.png',
    iconRetinaUrl: myURL + 'images/pin48.png',
    iconSize: [29, 24],
    iconAnchor: [9, 21],
    popupAnchor: [0, -14],
  });
  
  var markerClusters = L.markerClusterGroup();
  
  if ('features' in markers) markers = markers.features;
  for (var i = 0; i < markers.length; ++i) {
    var name = '',
      popup = '',
      prop = markers[i].properties;
    var keys = Object.keys(prop);
    for (const k of keys) {
      var tmp = k + ': ' + prop[k] + '<br />';
      if (k.match(/^\d*name\w*$/)) {
        name += tmp;
      } else {
        popup += tmp;
      }
    }
  
    var coord = markers[i].geometry.coordinates;
    var m = L.marker([coord[1], coord[0]], {
      icon: myIcon,
    }).bindPopup(name+popup);
  
    markerClusters.addLayer(m);
  }
  map.addLayer(markerClusters);
}

