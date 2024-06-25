import React, { useEffect, useState } from "react";
import {
  LayersControl,
  MapContainer,
  TileLayer,
  GeoJSON,
  useMapEvent,
} from "react-leaflet";
import "./Map_employee.css";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import Btn_employee_list from "../tmp/list.png";
import { Link } from "react-router-dom";
import L from "leaflet";
import docIconImage from "../tmp/doc_icon.png";

const docIcon = new L.Icon({
  iconUrl: docIconImage,
  iconSize: [20, 27],
  iconAnchor: [0, 0],
  popupAnchor: [10, 0],
  shadowSize: [41, 41],
});

function MapEmployee() {
  const [pracownicy, setPracownicy] = useState(null);

  const makePopup = (feature, layer) => {
    if (feature.properties) {
      console.log(feature.properties);
      layer.bindPopup(
        `<strong1>Imię: ${feature.properties.imie}<br>
         Nazwisko: ${feature.properties.nazwisko}</strong1><br>
        <strong2>Funkcja: ${feature.properties.funkcja}</strong2><br>
        <strong2>Adres: ${feature.properties.lokalizacja}</strong2>`
      );
    }
  };

  useEffect(() => {
    const getData = () => {
      axios
        .get(
          "http://localhost:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3Apracownicy&maxFeatures=50&outputFormat=application%2Fjson"
        )
        .then((dane) => {
          console.log(dane);
          setPracownicy(dane.data);
        });
    };
    getData();
  }, []);

  function MarkerPlacement() {
    const [position, setPosition] = useState(null);

    useMapEvent({
      click: (e) => {
        setPosition(e.latlng);
      },
    });
  }

  return (
    <div>
      <MapContainer
        center={[52.232222, 21.0]}
        zoom={11}
        style={{ height: "100vh", width: "100%" }}
      >
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
          <LayersControl.Overlay checked name="Pracownicy WFS">
            {pracownicy ? (
              <GeoJSON
                data={pracownicy}
                onEachFeature={makePopup}
                pointToLayer={(feature, latlng) => {
                  return L.marker(latlng, { icon: docIcon });
                }}
              />
            ) : (
              ""
            )}
          </LayersControl.Overlay>
        </LayersControl>
        <MarkerPlacement />
      </MapContainer>
      <Link to="/dashboard_employees_list">
        <img className="employee_list_icon" src={Btn_employee_list}></img>
      </Link>
    </div>
  );
}

export default MapEmployee;
