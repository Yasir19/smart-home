import React, { useState } from "react";
import { ADD_PROJECT } from "../../utils/mutation";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { Redirect } from "react-router-dom";
function CreateProject() {
	const [projectForm, setProjectForm] = useState({
		projectDescription: "",
		projectMaterials: "",
		projectZipCode: "",
		initPrice: "",
	});

	const [addProject, { error }] = useMutation(ADD_PROJECT);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setProjectForm({
			...projectForm,
			[name]: value,
		});
	};

	const formSubmit = async (e) => {
		e.preventDefault();
		try {
			await addProject({
				variables: { ...projectForm },
			});
			window.location.reload();
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<div>
			<main>
				<div className="card-container">
					<div className="card">
						<form
							className="flex-row justify-center justify-space-between-md align-stretch"
							onSubmit={formSubmit}
						>
							<input
								placeholder="Project Description"
								value={projectForm.projectDescription}
								onChange={handleChange}
								name="projectDescription"
								className="form-input col-12 col-md-9"
							></input>
							<input
								placeholder="Project Materials"
								value={projectForm.projectMaterials}
								onChange={handleChange}
								name="projectMaterials"
								className="form-input col-12 col-md-9"
							></input>
							<input
								placeholder="Project Zip Code"
								value={projectForm.projectZipCode}
								onChange={handleChange}
								name="projectZipCode"
								className="form-input col-12 col-md-9"
							></input>
							<input
								placeholder="Initial Price"
								value={projectForm.initPrice}
								onChange={handleChange}
								name="initPrice"
								className="form-input col-12 col-md-9"
							></input>
							<button className="btn col-12 col-md-3" type="submit">
								Submit
							</button>
						</form>
						{error && <div> <span>Please check you offer value </span></div>}
					</div>
				</div>
			</main>
		</div>
	);
}

export default CreateProject;
