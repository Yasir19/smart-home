import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import OfferForm from "../OfferForm";
import OfferList from "../OfferList";

const ProjectList = ({ projects, projectDescription }) => {
	if (!projects.length) {
		return <h3> No Available Projects Yet </h3>;
	}
	return (
		<div>
			<h3> {projectDescription}</h3>
			{projects &&
				projects.map((project) => (
					<div key={project._id} className="card mb-3" style={{width: "30rem"}}>
						<div className="">
							<Link to={`project/${project._id}`}>
								<h3 className="mb-0">Project Owner:{project.userName}</h3>
								<h4>Project Description:{project.projectDescription}</h4>
								<h4 className="mb-0">
									Project Materials:{project.projectMaterials}
								</h4>	
								<h4 className="mb-0">
									Project initial Price:{project.initPrice}
								</h4>
								</Link>
								<div className="col-12 mb-3">
									{Auth.contractorLoggedIn() ? <OfferForm projectId={project._id} />
									: Auth.customerLoggedIn() ? <OfferList offers={project.offers} projectId={project._id}/> : null}
								</div>
						
						</div>
					</div>
				))}
		</div>
	);
};
export default ProjectList;
