// ui.js
function loadStands() {
  stands.forEach(stand => {
    const y = stand.coords[0];
    const x = stand.coords[1];

    const width = 60;   // largeur en "unités image"
    const height = 30;  // hauteur en "unités image"

    const bounds = [
     // [y - height / 2, x - width / 2],
      //[y + height / 2, x + width / 2]//
       [y - height , x - width ],
      [y + height , x + width ]
    ];

    L.rectangle(bounds, {
      color: '#2e7d32',
      weight: 1,
      fillColor: '#4caf50',
     fillOpacity: 1
    });
    .addTo(map)
    .bindPopup(`<b>${stand.nom}</b><br>${stand.exposant}<br><a href=${stand.info} target="_blank">site web</a>`,
      {
      minWidth: 300,
     // minWidth: 200,
      //maxHeight: 150
        minHeight:150
    } )
    .openPopup();
  });
}

