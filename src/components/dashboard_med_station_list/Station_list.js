import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Station_list.css";
import Services_icon from "../tmp/services_shortcut.png";
import Map_icon from "../tmp/map_button_img.png";
import { Link } from "react-router-dom";

function Med_station_list() {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    const fetchStations = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3Astacje_pogotowia&maxFeatures=50&outputFormat=application%2Fjson"
        );
        setStations(response.data.features);
      } catch (error) {
        console.error("Error fetching station data:", error);
      }
    };

    fetchStations();
  }, []);

  return (
    <div>
      <div className="backgr">
        <div className="station_list_title">Spis stacji pogotowia</div>
        <div className="services_return">
          USŁUGI
          <Link to="/services">
            <img className="services_icon" src={Services_icon}></img>
          </Link>
          <Link to="/map_med_station">
            <img className="btn_map_from_list" src={Map_icon}></img>
          </Link>
        </div>
        <div className="station_table_container">
          <table className="station_table">
            <thead>
              <tr>
                <th>Nazwa</th>
                <th>Województwo</th>
                <th>Miasto</th>
                <th>Adres</th>
              </tr>
            </thead>
            <tbody>
              {stations.map((station) => (
                <tr key={station.id}>
                  <td>{station.properties.nazwa}</td>
                  <td>{station.properties.wojewodztwo}</td>
                  <td>{station.properties.miasto}</td>
                  <td>{station.properties.lokalizacja}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Med_station_list;
