import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutation";
import Auth from "../../utils/auth";

const Login = (props) => {
	const [formState, setFormState] = useState({ email: "", password: "" });
	const [login, { error }] = useMutation(LOGIN_USER);
	// update state based on form input changes
	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormState({
			...formState,
			[name]: value,
		});
	};
	//submit form
	const handleFormSubmit = async (e) => {
		e.preventDefault();
		try {
			const { data } = await login({
				variables: { ...formState },
			});
			Auth.login(data.login.token);
		} catch (e) {
			console.log(e);
		}

		//clear form values
		setFormState({
			email: "",
			password: "",
		});
	};
	return (
		<main>
			<div className="card-container" id="log-in">
				<div className="card">
					<h4 className="card-header">Login</h4>
					<div className="card-body">
						<form onSubmit={handleFormSubmit}>
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
							<button className="btn d-block w-100" type="submit">
								Submit
							</button>
						</form>
						{error && <div>Check your Information</div>}
					</div>
				</div>
			</div>
		</main>
	);
};
export default Login;
