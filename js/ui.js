// ui.js
function loadStands() {
  stands.forEach(stand => {
    L.polygon(stand.coords, {
      color: 'green',
      fillOpacity: 0.5
    })
    .addTo(map)
    .bindPopup(`<b>${stand.nom}</b><br>${stand.exposant}`);
  });
}

