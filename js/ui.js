// ui.js
function loadStands() {
  stands.forEach(stand => {
    L.marker(stand.coords)
      .addTo(map)
      .bindPopup(`<b>${stand.nom}</b><br>${stand.exposant}`);
  });
}

