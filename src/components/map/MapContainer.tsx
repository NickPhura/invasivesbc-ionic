import React, { Component } from "react";
import * as L from "leaflet";
import "leaflet-draw";
import "./MapContainer.css";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";

class MapContainer extends Component {
  constructor(props: any) {
    super(props);

    console.log("Map Constructor!");
  }

  async componentDidMount() {
    console.log("Map componentDidMount!");

    var map = L.map("map", { zoomControl: false }).setView([55, -128], 10);
    // On init setup

    L.control.zoom({ position: "bottomright" }).addTo(map);

    L.tileLayer(
      "https://maps.gov.bc.ca/arcgis/rest/services/province/roads_wm/MapServer/tile/{z}/{y}/{x}",
      {
        maxZoom: 18,
      }
    ).addTo(map);

    var drawnItems = new L.FeatureGroup();

    map.addLayer(drawnItems);

    var drawControl = new L.Control.Draw({
      position: "topright",
      draw: {
        marker: false,
        circle: true,
      },
      edit: {
        featureGroup: drawnItems,
        // remove: true,
        // edit: true
      },
    });

    map.addControl(drawControl);

    setTimeout(function () {
      map.invalidateSize();
      map.setView([55, -128], 10);
    }, 1000);

    map.on("draw:created", (feature) => {
      console.log(feature.layer.toGeoJSON());
      drawnItems.addLayer(feature.layer);
    });

    map.on("draw:drawvertex", function (layerGroup) {
      console.log(layerGroup);
    });

    map.on("draw:drawstart", function (layerGroup) {
      console.log("started");
      console.log(layerGroup);
    });

    map.on("draw:drawstop", function (layerGroup) {
      console.log("stopped");
      console.log(layerGroup);
    });

    map.on("draw:deleted", function () {
      console.log("deleted");
    });

    map.on("draw:editstart", function () {
      console.log("editstart");
    });

    map.on("draw:editmove", function () {
      console.log("editmove");
    });

    map.on("draw:editresize", function () {
      console.log("editresize");
    });

    map.on("draw:editvertex", function () {
      console.log("editvertex");
    });

    map.on("draw:editstop", function () {
      console.log("editstop");
    });

    map.on("draw:deletestart", function () {
      console.log("deletestart");
    });

    map.on("draw:deletestop", function () {
      console.log("deletestop");
    });
  }

  render = () => {
    return <div id="map"> </div>;
  };
}

export default MapContainer;
