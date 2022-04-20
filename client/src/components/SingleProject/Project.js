import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_PROJECT } from "../../utils/queries";
import { useParams } from "react-router-dom";
import Auth from "../../utils/auth";
import OfferForm from "../OfferForm";
import OfferList from "../OfferList";

const Project = () => {
	const { id: projectId } = useParams();

	const { loading, data } = useQuery(QUERY_PROJECT, {
		variables: { id: projectId },
	});
	const project = data?.project || {};
	if (loading) {
		return <div>Loading....</div>;
	}
	return (
		<div>
			<main>
				<div className="card-container">
					<div className="card bg-primary" style={{ width: "30rem" }}>
						<p className="card-header">
							<span style={{ fontWeight: 500 }} className="text-light">
								Project Owner: {project.userName}
							</span>
						</p>
						<div className="card-body">
							<p>project Description: {project.projectDescription}</p>
							<p>project Materials: {project.projectMaterials}</p>
							<p>init Price: {project.initPrice}</p>
						</div>
						<div className="flex-row justify-space-between">
							<div className="col-12 mb-3">
								{Auth.contractorLoggedIn() ? (
									<OfferForm projectId={project._id} />
								) : Auth.customerLoggedIn() ? (
									<OfferList offers={project.offers} projectId={project._id} />
								) : null}
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};
export default Project;
