import React from "react";
import "./About.css";
import Services_icon from "../tmp/services_shortcut.png";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <div className="backgr">
        <div className="about_title">O portalu</div>
        <div className="services_return">
          USŁUGI
          <Link to="/services">
            <img className="services_icon" src={Services_icon}></img>
          </Link>
        </div>
        <div className="portal_details"></div>
      </div>
    </div>
  );
}

export default About;
