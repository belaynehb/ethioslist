import React from "react";
import "./Banner.css";
// import hero from "../assets/ethiopia-tis-abay.avif";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://lp-cms-production.imgix.net/2019-06/c2af3eb20b44c86b0420b6d698107b21-tis-abay.jpg?auto=format&w=1920&h=640&fit=crop&crop=faces,edges&q=75')`,
        backgroundPosition: "center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Your second HOME away from home</h1>
        <h3 className="banner__description">
          You missed Ethiopia? Come and check us we have a lot to ease that
          feeling
        </h3>
        <div className="banner__buttons">
          <Link to="/video">
            <button className="banner__button">Movies</button>
          </Link>
          <Link to="/musics">
            <button className="banner__button">Music</button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Banner;
