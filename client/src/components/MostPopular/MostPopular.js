import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

import ImgSecurity from "../../assets/images/cctv.jpeg";
import ImgTV from "../../assets/images/tv.jpeg";
import ImgWiFi from "../../assets/images/wifi.jpeg";
import ImgLights from "../../assets/images/lights.webp";
import Imggd from "../../assets/images/gd.jpeg";
import Imgphone from "../../assets/images/phone.jpeg";

import css from "./mostpopular.css";

const MostPopular = () => {
  return (
    <section className="my-5">
      <h2>Most Popular Projects</h2>
      <article className="card-container most-popular">
        <>
          <Link to="/CreateProject" className="card" style={{ width: "18rem" }}>
            <img
              src={ImgWiFi}
              alt="Graph of Energy saving habits."
              width={180}
              height={180}
            ></img>
            <h4 className="card-title">Wifi Optimizer</h4>
          </Link>
          <Link to="/CreateProject" className="card" style={{ width: "18rem" }}>
            <img
              src={ImgLights}
              alt="Graph of Energy saving habits."
              width={180}
              height={180}
            ></img>{" "}
            <h4 className="card-title">Smart Light Installiton</h4>
          </Link>
          <Link to="/CreateProject" className="card" style={{ width: "18rem" }}>
            <img
              src={Imgphone}
              alt="Graph of Energy saving habits."
              width={180}
              height={180}
            ></img>
            <h4 className="card-title">Mobile Cell-Phone Repair</h4>
          </Link>
          <Link to="/CreateProject" className="card" style={{ width: "18rem" }}>
            <img
              src={ImgTV}
              alt="Graph of Energy saving habits."
              width={180}
              height={180}
            ></img>
            <h4 className="card-title">Home Thiater and Tv</h4>
          </Link>
          <Link to="/CreateProject" className="card" style={{ width: "18rem" }}>
            <img
              src={Imggd}
              alt="Graph of Energy saving habits."
              width={180}
              height={180}
            ></img>
            <h4 className="card-title">Smart Door Lock </h4>
          </Link>
          <Link to="/CreateProject" className="card" style={{ width: "18rem" }}>
            <img
              src={ImgSecurity}
              alt="Graph of Energy saving habits."
              width={180}
              height={180}
            ></img>
            <h4 className="card-title">Home Security</h4>
          </Link>
        </>
      </article>
    </section>
  );
};
export default MostPopular;
