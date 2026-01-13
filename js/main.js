// main.js
initMap();
loadStands();
document.getElementById("btn-reset").addEventListener("click", () => {
  map.setView([48.833, 2.285], 17);
});


