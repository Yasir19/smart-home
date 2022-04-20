import React from "react";
import ImgHero from "../../assets/images/hero.jpeg";

const InfoPage = () => {
	return (
		<section className="my-5">
			<div className="card" style={{ width: "18rem" }}>
				<img
					src={ImgHero}
					alt="Graph of Energy saving habits."
					// width={180}
					// height={180}
				></img>
			</div>
		</section>
	);
};
export default InfoPage;
