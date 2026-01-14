
// Création de la carte
const map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: 0,
  maxZoom: 2
});

// Dimensions de l'image
const bounds = [[0, 0], [1505, 593]]; // adapter selon ton image
L.imageOverlay('img/10rdc.PNG', bounds).addTo(map);
map.fitBounds(bounds);

// Fonction pour charger les stands
function loadStands() {
  stands.forEach(stand => {
    const [y, x] = stand.coords;

    // Taille du rectangle en unités image
    const width = 60;
    const height = 30;

    const rectBounds = [
      [y - height , x - width ],
      [y + height , x + width ]
    ];

    L.rectangle(rectBounds, {
      color: '#2e7d32',
      weight: 2,
      fillColor: '#4caf50',
      fillOpacity: 0.7
    })
    .addTo(map)
    .bindPopup(
      `<b>${stand.nom}</b><br>
       ${stand.exposant}<br>
       ${stand.info ? `<a href="${stand.info}" target="_blank">site web</a>` : ''}`,
      {
        maxWidth: 300,
        minWidth: 200,
        maxHeight: 150
      }
    );
  });
}

// Charger les stands
loadStands();

// Redimensionnement Leaflet (utile après rotation ou resize)
setTimeout(() => {
  map.invalidateSize();
}, 500);

