import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_CUSTOMER } from "../../utils/queries";
import { useParams, Redirect } from "react-router-dom";

const Account = () => {
	const { userName: userParam } = useParams();
	const { loading, data } = useQuery(QUERY_CUSTOMER, {
		variables: { userName: userParam },
	});
	const Account = data?.loggedUser || {};
	console.log("the account", Account);
	if (loading) {
		return <div>Loading....</div>;
	}
	return (
		<div>
			<main>
				<div className="card-container">
					<div className="card " style={{ width: "18rem" }}>
						<h2 className="card-title">Account Owner Info</h2>
						<br />
						<div className="card-body">
							<h4>User Name: {Account.userName}</h4>
							<h4>First Name: {Account.firstName}</h4>
							<h4>Last Name: {Account.lastName}</h4>
							<h4>email: {Account.email}</h4>
							<h4>Phone Number: {Account.phoneNumber}</h4>
							<h4>Address: {Account.address}</h4>
							<h4>Account Role: {Account.role}</h4>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};
export default Account;
