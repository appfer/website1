"use strict";

//alert(
//`De genoemde viswateren op deze website vallen onder verschillende verenigingen en hier zijn dus verschillende vispassen voor vereist`
//);

require([
  "esri/Map",
  "esri/views/MapView",
  "esri/Graphic",
  "dojo/domReady!",
], function (Map, MapView, Graphic) {
  //Construct a Map object
  var map = new Map({
    basemap: "topo",
  });

  //Construct a MapView object
  var view = new MapView({
    container: "viewDiv",
    map: map,
    center: [4.833241, 51.710028],
    zoom: 11,
  });

  //Construct a point object for amercentrale
  var pointAC = {
    type: "point",
    longitude: 4.833241,
    latitude: 51.710028,
  };

  //Construct a point object for biesbosch
  var pointBB = {
    type: "point",
    longitude: 4.828003,
    latitude: 51.753863,
  };

  //Construct a point object for schuivenoordseweg
  var pointST = {
    type: "point",
    longitude: 4.736269,
    latitude: 51.648042,
  };

  //Construct a point object for gat van den ham
  var pointGH = {
    type: "point",
    longitude: 4.733119,
    latitude: 51.720359,
  };

  //Construct a point object for oude haven drimmelen
  var pointOH = {
    type: "point",
    longitude: 4.805419,
    latitude: 51.709293,
  };

  //Construct a point object for brandput
  var pointBP = {
    type: "point",
    longitude: 4.707062,
    latitude: 51.708727,
  };

  //Construct a point object for halsche vliet
  var pointHV = {
    type: "point",
    longitude: 4.658133,
    latitude: 51.619023,
  };

  //Construct a SimpleMarkerSymbol object
  var markerSymbol = {
    type: "simple-marker",
    color: [226, 15, 5],
    outline: {
      color: [255, 255, 255],
      width: 2,
    },
  };

  //Construct a Graphic object for biesbosch
  var graphicBB = new Graphic({
    geometry: pointBB,
    symbol: markerSymbol,
  });

  //Construct a Graphic object for amercentrale
  var graphicAC = new Graphic({
    geometry: pointAC,
    symbol: markerSymbol,
  });

  //Construct a Graphic object for schuivenoordseweg
  var graphicST = new Graphic({
    geometry: pointST,
    symbol: markerSymbol,
  });

  //Construct a Graphic object for gat van den ham
  var graphicGH = new Graphic({
    geometry: pointGH,
    symbol: markerSymbol,
  });

  //Construct a Graphic object for oude haven
  var graphicOH = new Graphic({
    geometry: pointOH,
    symbol: markerSymbol,
  });

  //Construct a Graphic object for brandput
  var graphicBP = new Graphic({
    geometry: pointBP,
    symbol: markerSymbol,
  });

  //Construct a Graphic object for halsche vliet
  var graphicHV = new Graphic({
    geometry: pointHV,
    symbol: markerSymbol,
  });

  // Add GraphicsLayers to Map object
  view.graphics.add(graphicBB);
  view.graphics.add(graphicAC);
  view.graphics.add(graphicST);
  view.graphics.add(graphicGH);
  view.graphics.add(graphicOH);
  view.graphics.add(graphicBP);
  view.graphics.add(graphicHV);
});
