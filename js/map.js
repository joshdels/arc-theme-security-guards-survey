const Graphic = await $arcgis.import("@arcgis/core/Graphic.js");

const mapEl = document.querySelector("arcgis-map");
const locateEl = document.querySelector("arcgis-locate");
const latInput = document.getElementById("latitude");
const lngInput = document.getElementById("longitude");

await mapEl.viewOnReady();

const marker = new Graphic({
  geometry: {
    type: "point",
    longitude: null,
    latitude: null,
  },
  symbol: {
    type: "simple-marker",
    color: "#e63946",
    size: 12,
    outline: {
      color: "white",
      width: 2,
    },
  },
});

mapEl.graphics.add(marker);

// change graphics here
locateEl.graphic = marker;

// uses watch chnages here heheh
marker.watch("geometry", (geometry) => {
  if (!geometry) return;
  latInput.value = geometry.latitude.toFixed(6);
  lngInput.value = geometry.longitude.toFixed(6);
});

// uses modern native "arcgisViewclick", other are view.on, reactiveUtils.watch/when and on, and componentOnReady / viewOnReady
// kinda like the modern arcgisViewClick and the ViewOn!! hehehe
mapEl.addEventListener("arcgisViewClick", (event) => {
  marker.geometry = event.detail.mapPoint;
});
