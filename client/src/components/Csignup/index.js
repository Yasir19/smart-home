import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutation";
import Auth from "../../utils/auth";

const Csignup = () => {
	const [formState, setFormState] = useState({
		userName: "",
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		address: "",
		phoneNumber: "",
		role: "Contractor",
		typeOfServices: "",
		serviceZipcode: "",
	});

	const [addUser, { error }] = useMutation(ADD_USER);
	// update state based on form input changes
	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormState({
			...formState,
			[name]: value,
		});
	};
	// submit form
	const handleFormSubmit = async (event) => {
		event.preventDefault();
		// use try/catch instead of promises to handle error
		try {
			//execute addContractor mutation and pass in variable data from form
			const { data } = await addUser({
				variables: { ...formState },
			});
			console.log(data);
			Auth.login(data.addUser.token);
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<main>
			<div className="card-container">
				<div className="card">
					<h4 className="card-header">Sign Up</h4>
					<div className="card-body">
						<form onSubmit={handleFormSubmit}>
							<input
								className="form-input"
								placeholder="Your Name"
								name="userName"
								type="text"
								id="userName"
								value={formState.userName}
								onChange={handleChange}
							/>
							<input
								className="form-input"
								placeholder="First Name"
								name="firstName"
								type="text"
								id="firstName"
								value={formState.firstName}
								onChange={handleChange}
							/>
							<input
								className="form-input"
								placeholder="Last Name"
								name="lastName"
								type="text"
								id="lastName"
								value={formState.lastName}
								onChange={handleChange}
							/>
							<input
								className="form-input"
								placeholder="Your email"
								name="email"
								type="email"
								id="email"
								value={formState.email}
								onChange={handleChange}
							/>
							<input
								className="form-input"
								placeholder="******"
								name="password"
								type="password"
								id="password"
								value={formState.password}
								onChange={handleChange}
							/>
							<input
								className="form-input"
								placeholder="(999)-999-9999"
								name="phoneNumber"
								type="text"
								id="phoneNumber"
								value={formState.phoneNumber}
								onChange={handleChange}
							/>
							<input
								className="form-input"
								placeholder="Your Address"
								name="address"
								type="address"
								id="address"
								value={formState.address}
								onChange={handleChange}
							/>
							<input
								className="form-input"
								placeholder="Services"
								name="typeOfServices"
								type="text"
								id="services"
								value={formState.typeOfServices}
								onChange={handleChange}
							/>
							<input
								className="form-input"
								placeholder="Your Service Zipcode"
								name="serviceZipcode"
								type="number"
								id="serviceZipcode"
								value={formState.serviceZipcode}
								onChange={handleChange}
							/>
							<button className="btn d-block w-100" type="submit">
								Submit
							</button>
							{error && <div> <span>Sign up failed</span></div>}
						</form>
					</div>
				</div>
			</div>
		</main>
	);
};
export default Csignup;
