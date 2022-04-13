import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutation";

const Usersignup = () => {
	const [formState, setFormState] = useState({
		userName: "",
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		phoneNumber: "",
		address: "",
	});
	const [addUser, { error }] = useMutation(ADD_USER);

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
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<main className="flex-row justify-center mb-4">
			<div className="col-12 col-md-6">
				<div className="card">
					<h4 className="card-header">Sign Up</h4>
					<div className="card-body">
						<form onSubmit={handleFormSubmit}>
							<input
								className="form-input"
								placeholder="userName"
								userName="userName"
								type="text"
								id="userName"
								value={formState.userName}
								onChange={handleChange}
							/>
							<input
								className="form-input"
								placeholder="firstName"
								firstName="firstName"
								type="text"
								id="firstName"
								value={formState.firstName}
								onChange={handleChange}
							/>
							<input
								className="form-input"
								placeholder="lastName"
								lastName="lastName"
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
							<button className="btn d-block w-100" type="submit">
								Submit
							</button>
							{error && <div>User Sign up failed</div>}
						</form>
					</div>
				</div>
			</div>
		</main>
	);
};


export default Usersignup