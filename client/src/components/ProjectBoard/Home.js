import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_PROJECTS } from "../../utils/queries";
import Landingpage from "../landingPage";
const Home = () => {
	const { loading, data } = useQuery(QUERY_PROJECTS);

	const projects = data?.projects || [];
	console.log(projects);

	return (
		<main>
			<div className="flex-row justify-space-between">
				<Landingpage></Landingpage>
			</div>
		</main>
	);
};

export default Home;
