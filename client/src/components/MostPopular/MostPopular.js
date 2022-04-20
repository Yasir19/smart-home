import React from "react";
import ImgSecurity from "../../assets/images/Security/Security.webp";
import css from "./mostpopular.css";

const MostPopular = () => {
	return (
		<section className="my-5">
			<h2>Most Popular Projects</h2>
			<article className="card-container most-popular">
				<div className="card" style={{ width: "18rem" }}>
					<img
						src={ImgSecurity}
						alt="Graph of Energy saving habits."
						width={180}
						height={180}
					></img>
					<h4 className="card-title">Wifi Optimizer</h4>
				</div>
				<div className="card" style={{ width: "18rem" }}>
					<img
						src={ImgSecurity}
						alt="Graph of Energy saving habits."
						width={180}
						height={180}
					></img>{" "}
					<h4 className="card-title">Smart Light Installiton</h4>
				</div>
				<div className="card" style={{ width: "18rem" }}>
					<img
						src={ImgSecurity}
						alt="Graph of Energy saving habits."
						width={180}
						height={180}
					></img>
					<h4 className="card-title">Mobile Cell-Phone Repair</h4>
				</div>
				<div className="card" style={{ width: "18rem" }}>
					<img
						src={ImgSecurity}
						alt="Graph of Energy saving habits."
						width={180}
						height={180}
					></img>
					<h4 className="card-title">Home Thiater and Tv</h4>
				</div>
				<div className="card" style={{ width: "18rem" }}>
					<img
						src={ImgSecurity}
						alt="Graph of Energy saving habits."
						width={180}
						height={180}
					></img>
					<h4 className="card-title">Smart Door Lock </h4>
				</div>
				<div className="card" style={{ width: "18rem" }}>
					<img
						src={ImgSecurity}
						alt="Graph of Energy saving habits."
						width={180}
						height={180}
					></img>
					<h4 className="card-title">Home Security</h4>
				</div>
			</article>
		</section>
	);
};
export default MostPopular;
