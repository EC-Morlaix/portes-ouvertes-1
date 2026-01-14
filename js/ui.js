// ui.js
function loadStands() {
  stands.forEach(stand => {
    const iconStand = L.divIcon({
      className: "stand-rect",
      html: `<div>${stand.nom}</div>`,
      iconSize: [60, 30],
      iconAnchor: [30, 15]
    });

    L.marker(stand.coords, { icon: iconStand })
      .addTo(map)
      .bindPopup(`<b>${stand.nom}</b><br>${stand.exposant}`);
  });
}
