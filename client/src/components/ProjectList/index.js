import React from "react";
import { Link } from "react-router-dom";
import Auth from '../../utils/auth'
import OfferForm from '../OfferForm'
import OfferList from '../OfferList'
import ApproveOffer from "../ApproveOffer";

const ProjectList = ({ projects, projectDescription }) => {
	if (!projects.length) {
		return <h3> No Available Projects Yet </h3>;
	}
	return (
		<div>
			<h3> {projectDescription}</h3>
			{projects &&
				projects.map((project) => (
					<div key={project._id} className="card mb-3">
						<div className="card-body">
							<Link to={`project/${project._id}`}>
								<p className="mb-0">Project Owner:{project.userName}</p>
								<p>Project Description:{project.projectDescription}</p>
								<p className="mb-0">
									Project Materials:{project.projectMaterials}
								</p>
								<p className="mb-0">
									Project initial Price:{project.initPrice} || click to{" "}
									{project.offerCount ? "see" : "start"} offers
								</p>
								</Link>
								<div className="col-12 mb-3">
									{Auth.contractorLoggedIn() ? <OfferForm projectId={project._id} />
									: Auth.customerLoggedIn ? <OfferList offers={project.offers} /> : null}
								</div>
						
						</div>
					</div>
				))}
		</div>
	);
};
export default ProjectList;
