import React from "react";
import "./Employee_list.css";
import Services_icon from "../tmp/services_shortcut.png";
import Map_icon from "../tmp/map_button_img.png";
import Window_icon from "../tmp/Window.png";
import { Link } from "react-router-dom";

function Employee_list() {
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
          {/* <div className="table_employees"></div> NA TABELE Z DANYMI */}
        </div>
      </div>
    </div>
  );
}

export default Employee_list;
