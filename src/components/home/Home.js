import React from "react";
import "./Home.css";
import icon from "../tmp/heart.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="home">
        <div className="backgr">
          <img className="icon" src={icon} alt="jpg1"></img>
          <div className="title">GEOPORTAL WSPARCIA MEDYCZNEGO</div>
          <div className="subtitle">
            Strona internetowa z interaktywną mapą stacji pogotowia, incydentów
            oraz pracowników.
          </div>
          <Link to="/about">
            <div className="about">O portalu</div>
          </Link>
          <Link to="/services">
            <button className="btn">START</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
