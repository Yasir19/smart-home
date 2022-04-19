import React from "react";
import ProjectList from '../OfferList'
import Auth from "../../utils/auth";
const ApprovedList = ({project,ContractorName,projectId}) =>{
    return(
        <div className="flex-row justify-space-between mb-3">
        <div className="col-12 mb-3 col-lg mb-3">
            {Auth.LoggedIn() && <ProjectList projects={project } ></ProjectList>}
        </div>
    </div>
    )
}
export default ApprovedList