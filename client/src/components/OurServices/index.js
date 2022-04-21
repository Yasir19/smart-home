import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
	return (
		<section className="" id="our-services">
			<h2>Our Services</h2>
			<article className="card-container">
				<div className="card" style={{ width: "18rem" }}>
					<h4 className="card-title">
					<Link to="/EnergyManagement">Energy Management</Link></h4>
					<img
						src="https://img.freepik.com/free-photo/digital-tablet-screen-with-smart-home-controller-wooden-table_53876-96317.jpg?t=st=1650333133~exp=1650333733~hmac=e3f7a4c08e987d974e39d55a48e821a7f247b49d7e8c401415456988799e2d29&w=740"
						alt="Graph of Energy saving habits."
						width={275}
						height={180}
					></img>
					<p className="card-text">
						Want to learn more about how we can help you reduce electricty cost
						around your home?
						<br/>
						Click here!
					</p>
				</div>
				<div className="card" style={{ width: "18rem" }}>
					<h4 className="card-title">
					<Link to="/HomeSecurity">Home Security</Link></h4>
					<img
						src="https://img.freepik.com/free-vector/isometric-smart-home-technology-interface-smartphone-app-screen-with-augmented-reality-ar-view_122058-956.jpg?w=740"
						alt="Home Security"
						width={275}
						height={180}
					></img>
					<p className="card-text">
						Let us welcome you to the new age of Home Security here! Click to
						learn about the service we offer that will welcome you to the new
						age!
					</p>
				</div>
				<div className="card" style={{ width: "18rem" }}>
					<h4 className="card-title"></h4>
					<Link to="/LifeStyleSupport">LifeStyle Support</Link>
					<img
						src="https://img.freepik.com/free-vector/internet-things-concept_1284-10812.jpg?t=st=1650336184~exp=1650336784~hmac=88d5fe240c8d0e8dde4a30c8863818e7c1cae29c2ba8b25813c2bea60fff4fc3&w=996"
						alt="Smart Phone apps"
						width={275}
						height={180}
					></img>
					<p className="card-text">
						Need life to move as quickly as you do? Click here to learn more
						about our Life Style Support Service!
					</p>
				</div>
			</article>
		</section>
	);
};
export default Services;
