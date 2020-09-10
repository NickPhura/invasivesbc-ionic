import React, { Component } from "react";
import * as L from "leaflet";
import 'leaflet-draw';
import "./MapContainer.css";
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';

class MapContainer extends Component {
  constructor(props: any) {
    super(props);


    console.log("Map Constructor!");
  }


  async componentDidMount() {
    console.log("Map componentDidMount!");

    var map = L.map('map',{zoomControl: false}).setView([55,-128],10);
    // On init setup

    L.control.zoom({position: 'bottomright'}).addTo(map);

    L.tileLayer('https://maps.gov.bc.ca/arcgis/rest/services/province/roads_wm/MapServer/tile/{z}/{y}/{x}',{
      maxZoom: 18
    }).addTo(map);

    const drawnItems = new L.FeatureGroup();

    map.addLayer(drawnItems);

    const drawControl = new L.Control.Draw({
      position: 'topright',
      edit: {
        featureGroup: drawnItems
      }
    })

    map.addControl(drawControl);

    setTimeout(function () {
      console.log("invalidate");
      map.invalidateSize();
      map.setView([55,-128],10);
    },1000);

    map.on('draw:created',(feature) => {
      console.log(feature);
      map.addLayer(feature.layer);
    })

  }


  render = () => {
    return (
      <div id="map">
      </div>
    );
  };
}

export default MapContainer;
