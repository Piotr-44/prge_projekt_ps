import React from "react";
import "./Station_list.css";
import Services_icon from "../tmp/services_shortcut.png";
import Map_icon from "../tmp/map_button_img.png";
import { Link } from "react-router-dom";

function Med_station_list() {
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
      </div>
    </div>
  );
}

export default Med_station_list;
