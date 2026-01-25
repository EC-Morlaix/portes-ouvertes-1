// ui.js
loadStands();
function loadStands() {
  stands.forEach(stand => {
    const x = stand.coords[0];
    const y = stand.coords[1];

    let couleur = yellowIcon;
    if (!stand.atelier) couleur = redIcon;
    if (stand.atelier) {if (stand.pro) couleur = purpleIcon};
	  if (stand.atelier) {if (stand.gt) couleur = orangeIcon};

    var marker = L.marker([y,x],{icon:couleur})
    .addTo(map)
    .bindPopup(`<b>${stand.cursus}</b><br><b>${stand.nom}</b><br>${stand.exposant}<br><a href=${stand.info}>${stand.titreInfo}</a>`,
      {
      minWidth: 500
    } )
    var icon = marker.options.icon;
    icon.options.iconSize = [35, 60];
    icon.options.shadowSize = [0,0];
    marker.setIcon(icon);
  });
}

