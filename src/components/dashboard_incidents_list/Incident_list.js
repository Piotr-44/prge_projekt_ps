import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Incident_list.css";
import Services_icon from "../tmp/services_shortcut.png";
import Map_icon from "../tmp/map_button_img.png";
import { Link } from "react-router-dom";

function Incident_list() {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    const fetchIncidents = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3Apacjenci&maxFeatures=50&outputFormat=application%2Fjson"
        );
        setIncidents(response.data.features);
      } catch (error) {
        console.error("Error fetching incident data:", error);
      }
    };
    fetchIncidents();
  }, []);

  return (
    <div>
      <div className="incidents_backgr">
        <div className="incident_list_title">Spis zgłoszonych incydentów</div>
        <div className="services_return">
          USŁUGI
          <Link to="/services">
            <img className="services_icon" src={Services_icon}></img>
          </Link>
          <Link to="/map_med_station">
            <img className="btn_map_from_list" src={Map_icon}></img>
          </Link>
        </div>
        <div className="incident_table_container">
          <table className="incident_table">
            <thead>
              <tr>
                <th>Imię</th>
                <th>Nazwisko</th>
                <th>Incydent</th>
                <th>Województwo</th>
                <th>Miasto</th>
                <th>Adres</th>
              </tr>
            </thead>
            <tbody>
              {incidents.map((incident) => (
                <tr key={incident.id}>
                  <td>{incident.properties.imie}</td>
                  <td>{incident.properties.nazwisko}</td>
                  <td>{incident.properties.incydent}</td>
                  <td>{incident.properties.wojewodztwo}</td>
                  <td>{incident.properties.miasto}</td>
                  <td>{incident.properties.lokalizacja}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Incident_list;
