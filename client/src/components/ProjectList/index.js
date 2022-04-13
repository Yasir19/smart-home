import React from "react";
import { Link } from "react-router-dom";

const ProjectList = ({projects, projectDescription}) => {
    if(!projects.length){
        return<h3> No Available Projects Yet </h3>
    }
    return(
        <div>
            <h3> {projectDescription}</h3>
            {projects && projects.map(project => (
                <div key={project._id} classNmae='card mb-3'>
                    {/* <p classNmae='card-header'>
                        {project.yourName}
                        
                    </p> */}
                    <div classNmae = 'card-body'>
                    <p className="mb-0">
                            Project Owner:{project.yourName}
                        </p>
                        <p>Project Description:{project.projectDescription}</p>
                        <p className="mb-0">
                            Project Materials:{project.projectMaterials}
                        </p>
                        <p className="mb-0">
                            Project initial Price:{project.initPrice} || click to{' '}
                            
                        </p>

                    </div>
                    </div>
            ))}
            </div>
    )
}
export default ProjectList;

