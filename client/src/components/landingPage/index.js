import React from "react";
import Typical from "react-typical";
import InfoPage from "../InfoPage";
import Services from "../OurServices";
import MostPopular from "../MostPopular/MostPopular";

const Landingpage = () => {
	return (
		<section className="my-5">
			<div className="profile-details-name">
				<span className="primary-text" id="welcome">
					{" "}
					Welcome to <span className="highligted-text">Smart Home </span>
				</span>
			</div>
			<div className="profile-details-role">
				<span className="primary-text">
					{" "}
					<h1>
						<Typical
							loop={Infinity}
							steps={[
								"Improve your Home Energy Managment",
								1000,
								"LifeStyle Support",
								1000,
								"Secure Your Home",
								1000,
								"Optimize your Home Wifi signal",
								1000,
							]}
						/>
					</h1>
				</span>
			</div>
			<div>
				{/* <InfoPage></InfoPage> */}
			</div>
			<div>
				<Services></Services>
			</div>
			<div>
				<MostPopular></MostPopular>
			</div>
		</section>
	);
};
export default Landingpage;
