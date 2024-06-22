import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Employee_list.css";
import Services_icon from "../tmp/services_shortcut.png";
import Map_icon from "../tmp/map_button_img.png";
import Window_icon from "../tmp/Window.png";
import { Link } from "react-router-dom";

function Employee_list() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3Apracownicy&maxFeatures=50&outputFormat=application%2Fjson"
        );
        setDoctors(response.data.features);
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div>
      <div className="backgr">
        <div className="incident_list_title">Spis pracowników</div>
        <div className="services_return">
          USŁUGI
          <Link to="/services">
            <img className="services_icon" src={Services_icon}></img>
          </Link>
          <Link to="/map_employees">
            <img className="btn_map_from_list" src={Map_icon}></img>
          </Link>
          <Link to="/dashboard_employees_view">
            <img className="btn_employee_pics" src={Window_icon}></img>
          </Link>
        </div>
        <div className="employee_table_container">
          <table className="employee_table">
            <thead>
              <tr>
                <th>Imię</th>
                <th>Nazwisko</th>
                <th>Specjalizacja</th>
                <th>Województwo</th>
                <th>Miasto</th>
                <th>Adres</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doctor) => (
                <tr key={doctor.id}>
                  <td>{doctor.properties.imie}</td>
                  <td>{doctor.properties.nazwisko}</td>
                  <td>{doctor.properties.funkcja}</td>
                  <td>{doctor.properties.wojewodztwo}</td>
                  <td>{doctor.properties.miasto}</td>
                  <td>{doctor.properties.lokalizacja}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Employee_list;
