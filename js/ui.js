// ui.js
function loadStands() {
  stands.forEach(stand => {
    const x = stand.coords[0];
    const y = stand.coords[1];

    const width = stand.coords[2];   // largeur en "unités image"
    const height = stand.coords[3];  // hauteur en "unités image"

    const bounds = [
       [x-width,y - height],
      [x + width, y + height]
    ];

    L.rectangle(bounds, {
      color: stand.color,
      weight: 1,
      fillColor: stand.color,
     fillOpacity: 1
    })
    .addTo(map)
    .bindPopup(`<b>${stand.nom}</b><br>${stand.exposant}<br><a href=${stand.info} target="_blank">site web</a>`,
      {
      minWidth: 300,
     // minWidth: 200,
      //maxHeight: 150
        minHeight:150
    } )
  });
}

