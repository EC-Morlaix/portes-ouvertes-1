// Dimensions réelles de l’image (en pixels)
const imageWidth = 2028/2;
const imageHeight = 1052/2;

// Coordonnées fictives
const bounds = [[0, 0], [imageHeight, imageWidth]];

const map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: 0,
  maxZoom: 2
});

L.imageOverlay('../img/plan101er.png', bounds).addTo(map);

map.fitBounds(bounds);
setTimeout(() => {
  map.invalidateSize();
}, 300);


let ColorIcon =  L.Icon.extend({
    options: {
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
        iconSize: [25, 41],
        shadowSize: [41, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34]
 }
});

let yellowIcon = new ColorIcon({iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-yellow.png'});

let redIcon = new ColorIcon({iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png'});

let purpleIcon = new ColorIcon({iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-violet.png'});

let orangeIcon = new ColorIcon({iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png'});




