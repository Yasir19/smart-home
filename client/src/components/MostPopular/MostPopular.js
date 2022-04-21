import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

import ImgSecurity from "../../assets/images/cctv.jpeg";
import ImgTV from "../../assets/images/tv.jpeg";
import ImgWiFi from "../../assets/images/wifi.jpeg";
import ImgLights from "../../assets/images/lights.webp";
import Imggd from "../../assets/images/gd.jpeg";
import Imgphone from "../../assets/images/phone.jpeg";

const MostPopular = () => {
  return (
    <section className="my-5" id="most-popular">
      <h2>Popular Smart Installations</h2>
      <article className="card-container">
        <div className="project-card">
          <Link to="/CreateProject" className="card" style={{ width: "18rem" }}>
            <img
                src={ImgWiFi}
                alt="Graph of Energy saving habits."
                width={180}
                height={180}
            ></img>
            <h4 className="card-title">Wifi Optimization</h4>
          </Link>
        </div>
        <div className="project-card">
          <Link to="/CreateProject" className="card" style={{ width: "18rem" }}>
            <img
              src={ImgLights}
              alt="Graph of Energy saving habits."
              width={180}
              height={180}
            ></img>{" "}
            <h4 className="card-title">Smart Home Lighting</h4>
          </Link>
        </div>
        <div className="project-card">
          <Link to="/CreateProject" className="card" style={{ width: "18rem" }}>
            <img
              src={Imgphone}
              alt="Graph of Energy saving habits."
              width={180}
              height={180}
            ></img>
            <h4 className="card-title">Smart Phone Repair</h4>
          </Link>
        </div>
        <div className="project-card">
          <Link to="/CreateProject" className="card" style={{ width: "18rem" }}>
            <img
              src={ImgTV}
              alt="Graph of Energy saving habits."
              width={180}
              height={180}
            ></img>
            <h4 className="card-title">Home Theater</h4>
          </Link>
        </div>
        <div className="project-card">
          <Link to="/CreateProject" className="card" style={{ width: "18rem" }}>
            <img
              src={Imggd}
              alt="Graph of Energy saving habits."
              width={180}
              height={180}
            ></img>
            <h4 className="card-title">Smart Garage </h4>
          </Link>
        </div>
        <div className="project-card">
          <Link to="/CreateProject" className="card" style={{ width: "18rem" }}>
            <img
              src={ImgSecurity}
              alt="Graph of Energy saving habits."
              width={180}
              height={180}
            ></img>
            <h4 className="card-title">Home Security</h4>
          </Link>
        </div>
      </article>
    </section>
  );
};
export default MostPopular;
