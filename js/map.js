// Dimensions réelles de l’image (en pixels)
const imageWidth = 1505;
const imageHeight = 593;

// Coordonnées fictives
const bounds = [[0, 0], [imageHeight, imageWidth]];

const map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: 0,
  maxZoom: 2
});

L.imageOverlay('../img/10rdc.PNG', bounds).addTo(map);

map.fitBounds(bounds);
setTimeout(() => {
  map.invalidateSize();
}, 300);

