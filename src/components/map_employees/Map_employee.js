import React, { useEffect } from "react";
import {
  LayersControl,
  MapContainer,
  TileLayer,
  WMSTileLayer,
} from "react-leaflet";
import "./Map_employee.css";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import Btn_employee_list from "../tmp/list.png";
import { Link } from "react-router-dom";

function Map_employee() {
  useEffect(() => {
    console.log("aa");
    const getData = () => {
      axios
        .get(
          // "http://127.0.0.1:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3Agranice_wojewodztw_db&maxFeatures=50&outputFormat=application%2Fjson"
          "https://jsonplaceholder.typicode.com/posts/1"
        )
        .then((dane) => {
          console.log(dane);
        });
    };
    getData();
  }, []);

  return (
    <div>
      <MapContainer center={[52.232222, 21.0]} zoom={6}>
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
        </LayersControl>
      </MapContainer>
      <Link to="/dashboard_employees_list">
        <img className="employee_list_icon" src={Btn_employee_list}></img>
      </Link>
    </div>
  );
}

export default Map_employee;
