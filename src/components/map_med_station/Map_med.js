import React, { useEffect, useState } from "react";
import {
  LayersControl,
  MapContainer,
  TileLayer,
  GeoJSON,
  useMapEvent,
} from "react-leaflet";
import "./Map_med.css";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import Btn_station_list from "../tmp/list.png";
import { Link } from "react-router-dom";
import L from "leaflet";
import stationIconImage from "../tmp/med_station.png";
// import incidentIconImage from "../tmp/incident.png";

const stationIcon = new L.Icon({
  iconUrl: stationIconImage,
  iconSize: [25, 35],
  iconAnchor: [0, 0],
  popupAnchor: [13, 0],
  shadowSize: [41, 41],
});

// const incidentIcon = new L.Icon({
//   iconUrl: incidentIconImage,
//   iconSize: [25, 35],
//   iconAnchor: [0, 0],
//   popupAnchor: [13, 0],
//   shadowSize: [41, 41],
// });

function Map_med() {
  const [stacje, setStacje] = useState(null);

  const makePopup = (feature, layer) => {
    if (feature.properties) {
      console.log(feature.properties);
      layer.bindPopup(
        `<strong1>Nazwa: ${feature.properties.nazwa}<br>
      <strong2>Adres: ${feature.properties.lokalizacja}</strong2>`
      );
    }
    // if (feature.properties) {
    //   console.log(feature.properties);
    //   layer.bindPopup(
    //     `<strong1>Nazwa: ${feature.properties.nazwa}<br>
    //   <strong2>Adres: ${feature.properties.lokalizacja}</strong2>`
    //   );
    // }
  };

  useEffect(() => {
    const getData = () => {
      axios
        .get(
          "http://localhost:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3Astacje_pogotowia&maxFeatures=50&outputFormat=application%2Fjson"
        )
        .then((dane) => {
          console.log(dane);
          setStacje(dane.data);
        });
    };
    getData();
  }, []);

  function MarkerPlacement() {
    const [position, setPosition] = useState(null);

    useMapEvent({
      click: (e) => {
        setPosition(e.latlng); // Ustawienie pozycji markera na kliknięcie mapy
      },
    });
  }

  return (
    <div>
      <MapContainer center={[52.232222, 21.0]} zoom={11}>
        <LayersControl>
          <LayersControl.BaseLayer checked name="OSM">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="GoogleSatelite">
            <TileLayer url="http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="OpenTopoMap">
            <TileLayer url="https://tile.opentopomap.org/{z}/{x}/{y}.png" />
          </LayersControl.BaseLayer>
          <LayersControl.Overlay checked name="Stacje pogotowia WFS">
            {stacje ? (
              <GeoJSON
                data={stacje}
                onEachFeature={makePopup}
                pointToLayer={(feature, latlng) => {
                  return L.marker(latlng, { icon: stationIcon });
                }}
              />
            ) : (
              ""
            )}
          </LayersControl.Overlay>
        </LayersControl>
        <MarkerPlacement />
      </MapContainer>
      <Link to="/dashboard_med_station_list">
        <img className="station_list_icon" src={Btn_station_list}></img>
      </Link>
    </div>
  );
}

export default Map_med;
