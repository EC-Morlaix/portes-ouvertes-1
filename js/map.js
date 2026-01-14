// Dimensions réelles de l’image (en pixels)
const imageWidth = 2000;
const imageHeight = 1200;

// Coordonnées fictives
const bounds = [[0, 0], [imageHeight, imageWidth]];

const map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -2,
  maxZoom: 2
});

L.imageOverlay('img/10rdc.PNG', bounds).addTo(map);

map.fitBounds(bounds);
