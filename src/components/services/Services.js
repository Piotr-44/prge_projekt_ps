import React from "react";
import "./Services.css";
import Btn_map from "../tmp/button_map.png";
import Btn_hospitals from "../tmp/button_hospitals.png";
import Btn_incidents from "../tmp/button_incidents.png";
import Btn_employees from "../tmp/button_employees.png";
import Mazovia from "../tmp/mazovia.png";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div>
      <div className="backgr">
        <div className="services">Dostępne usługi</div>
        <Link to="/maps">
          <img className="btn_map" src={Btn_map} btn_map></img>
        </Link>
        <Link to="/dashboard_med_station_list">
          <img className="btn_hospitals" src={Btn_hospitals} btn_map></img>
        </Link>
        <Link to="/dashboard_incidents_list">
          <img className="btn_incidents" src={Btn_incidents} btn_map></img>
        </Link>
        <Link to="/dashboard_employees_list">
          <img className="btn_employees" src={Btn_employees} btn_map></img>
        </Link>
        <div className="maps">Mapy</div>
        <div className="hospitals">Stacje pogotowia</div>
        <div className="incidents">Zgłoszenia</div>
        <div className="employees">Pracownicy</div>
        <img className="mazovia_img" src={Mazovia}></img>
        <Link to="/">
          <button className="return">POWRÓT</button>
        </Link>
      </div>
    </div>
  );
}

export default Services;
