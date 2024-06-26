import React from "react";
import "./Maps.css";
import Btn_med_map from "../tmp/button_map1_med_sup.png";
import Btn_empl_map from "../tmp/button_map_2_employ.png";
import Ambulans from "../tmp/ambulans.png";
import Ratownik from "../tmp/ratownik.png";
import Services_icon from "../tmp/services_shortcut.png";
import { Link } from "react-router-dom";

function Maps() {
  return (
    <div>
      <div className="backgr_map">
        <div className="maps_title">
          Spis dostępnych map
          <div className="maps_subtitle_1">
            Mapa wsparcia medycznego
            <Link to="/map_med_station">
              <img className="btn_map1" src={Btn_med_map}></img>
            </Link>
          </div>
          <div className="maps_subtitle_2">
            Mapa pracowników szpitali
            <Link to="/map_employees">
              <img className="btn_map2" src={Btn_empl_map}></img>
            </Link>
          </div>
        </div>
        <div>
          <div className="services_return">
            USŁUGI
            <Link to="/services">
              <img className="services_icon" src={Services_icon}></img>
            </Link>
          </div>
          <img className="ambulans" src={Ambulans}></img>
          <img className="paramedic" src={Ratownik}></img>
        </div>
      </div>
    </div>
  );
}

export default Maps;
