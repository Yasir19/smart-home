import decode from "jwt-decode";
class AuthService {
	// retieve data saved in token
	getProfile() {
		return decode(this.getToken());
	}
	LoggedIn() {
		const token = this.getToken();
		return !!token && !this.isTokenExpired(token);
	}
	// check if the user still logged in
	customerLoggedIn() {
		//Check if there is save token and it's still valid
		const token = this.getToken();
		// decode the token
		const decodeToken = decode(token);
		//get the role value
		const role = decodeToken.data.role;
		// check if this token has a role valye of customer
		if (role === "Customer") {
			// use type coersion to check if token is NOT undefined and the token is NOT expired
			return !!token && !this.isTokenExpired(token);
		} else {
			<p>Sorry you dont have access</p>
		}
	}
	// check if the user still logged in
	contractorLoggedIn() {
		//Check if there is save token and it's still valid
		const token = this.getToken();
		// decode the token
		const decodeToken = decode(token);
		//get the role value
		const role = decodeToken.data.role;
		// check if this token has a role valye of customer
		if (role !== "Customer") {
			// use type coersion to check if token is NOT undefined and the token is NOT expired
			return !!token && !this.isTokenExpired(token);
		} else {
			<p>Sorry you dont have access</p>
		}
	}
	// check if the token has expired
	isTokenExpired(token) {
		try {
			const decode = decode(token);
			if (decode.exp < Date.now() / 1000) {
				return true;
			} else {
				return false;
			}
		} catch (err) {
			return false;
		}
	}
	// retrieve token from localStorage
	getToken() {
		// Retrives the user token from localStorage
		return localStorage.getItem("id_token");
	}
	// set token to localStorage and reload page to homepage
	login(idToken) {
		//Save user token to localStorage
		localStorage.setItem("id_token", idToken);
		window.location.assign("/");
	}
	logout() {
		//cleare user token and profile data from localStorage
		localStorage.removeItem("id_token");
		window.location.assign("/");
	}
}

export default new AuthService();
