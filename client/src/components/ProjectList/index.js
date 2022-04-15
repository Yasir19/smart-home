import React from "react";
import { Link } from "react-router-dom";

const ProjectList = ({projects, projectDescription}) => {
    if(!projects.length){
        return<h3> No Available Projects Yet </h3>
    }
    return(
        <div>
            <h3> {projectDescription}</h3>
            {projects && projects.map(project =>(
               
                <div key={project._id}
                 className='card mb-3'>
                    {/* <p className='card-header'>
                        {project.yourName}
                        
                    </p> */}
                    <div className = 'card-body'>
                        <Link to={`project/${project._id}`}>
                    <p className="mb-0">
                            Project Owner:{project.yourName}
                        </p>
                        <p>Project Description:{project.projectDescription}</p>
                        <p className="mb-0">
                            Project Materials:{project.projectMaterials}
                        </p>
                        <p className="mb-0">
                            Project initial Price:{project.initPrice} || click to{' '}
                            {project.offerCount ? "see" : 'start'} offers
                        </p>
                        </Link>

                    </div>
                    </div>
            ))}
            </div>
    )
}
export default ProjectList;

