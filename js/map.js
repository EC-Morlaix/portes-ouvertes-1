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

L.imageOverlay('../img/plan10-rdc.png', bounds).addTo(map);

map.fitBounds(bounds);
setTimeout(() => {
  map.invalidateSize();
}, 300);

