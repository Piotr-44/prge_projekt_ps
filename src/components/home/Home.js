import React from "react";
import "./Home.css";
import ambulance from "../tmp/ambulance.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="home">
        <div className="backgr">
          <div className="title">GEOPORTAL WSPARCIA MEDYCZNEGO</div>
          <div className="subtitle">
            Strona internetowa z interaktywną mapą stacji pogotowia, incydentów
            oraz pracowników.
          </div>
          <div className="about">O portalu</div>
          <img className="ambulance" src={ambulance} alt="jpg1"></img>
          <Link to="/services">
            <button className="btn">START</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
