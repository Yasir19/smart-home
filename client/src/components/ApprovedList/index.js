import React from "react";


const ApprovedList = ({ projects, projectDescription }) => {
	if (!projects.length) {
		return <h3> No Available Projects Yet </h3>;
	}
	return (
		<div className="approved-list my-5">
			<h3> {projectDescription}</h3>
			{projects &&
				projects.map((project) => (
					<div key={project._id} className="card-approved-list mb-3">
						<div className="approved-contents">
							<div className="card">
								<p className="mb-0">Project Owner:{project.userName}</p>
								<p>Project Description:{project.projectDescription}</p>
								<p className="mb-0">
									Project Materials:{project.projectMaterials}
								</p>	
								<p className="mb-0">
									Project initial Price:{project.initPrice}
								</p>
								<iframe width="200" height="200" loading="lazy"  src={`https://www.google.com/maps/embed/v1/place?q=${project.projectZipCode}&key=AIzaSyDI3sNUMCRaUbcIHIGYV5sla-XT7k2V9NI`}></iframe>
						</div>
						</div>
					</div>
				))}
		</div>
	);
};
export default ApprovedList;
