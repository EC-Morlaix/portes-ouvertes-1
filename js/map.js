// map.js
let map;
console.log("js chargé");

function initMap() {
   map = L.map('map').setView([48.576, -3.836], 20);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
  }).addTo(map);
}

