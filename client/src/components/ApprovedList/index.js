import React from "react";


const ApprovedList = ({ projects, projectDescription }) => {
	if (!projects.length) {
		return <h3> No Available Projects Yet </h3>;
	}
	return (
		<div className="apporved-list my-5">
			<h3> {projectDescription}</h3>
			{projects &&
				projects.map((project) => (
					<div key={project._id} className="card-approved-list mb-3">
						<div className="card-body">
								<p className="mb-0">Project Owner:{project.userName}</p>
								<p>Project Description:{project.projectDescription}</p>
								<p className="mb-0">
									Project Materials:{project.projectMaterials}
								</p>	
								<p className="mb-0">
									Project initial Price:{project.initPrice}
								</p>
							
						</div>
					</div>
				))}
		</div>
	);
};
export default ApprovedList;
