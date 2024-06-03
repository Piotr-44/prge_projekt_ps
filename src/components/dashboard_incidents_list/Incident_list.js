import React from "react";
import "./Incident_list.css";
import Services_icon from "../tmp/services_shortcut.png";
import Map_icon from "../tmp/map_button_img.png";
import { Link } from "react-router-dom";

function Incident_list() {
  return (
    <div>
      <div className="backgr">
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
      </div>
    </div>
  );
}

export default Incident_list;
