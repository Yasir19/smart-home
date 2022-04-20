import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";
import { useParams } from "react-router-dom";
import Auth from "../../utils/auth";

const Account = () => {
	const { id: UserId } = useParams();

	const { loading, data } = useQuery(QUERY_USER, {
		variables: { id: UserId },
	});
	const Account = data?.Account || {};
	console.log(Account);
	if (loading) {
		return <div>Loading....</div>;
	}
	return (
		<div>
           <main>
               <div className="card-container">   
			<div className="card " style={{ width: "18rem" }}>
				<p className="card-title">
					<span style={{ fontWeight: 500 }} className="text-light">
						Account Owner: {Account.userName}
					</span>
				</p>
				<div className="card-body">
					<p>User Name: {Account.userName}</p>
					<p>First Name: {Account.firstName}</p>
					<p>Last Name: {Account.lastName}</p>
					<p>email: {Account.email}</p>
					<p>Phone Number: {Account.phoneNumber}</p>
					<p>Address: {Account.address}</p>
					<p>Zipcode: {Account.serviceZipcode}</p>
					<p>Account Role: {Account.role}</p>
				</div>   
            </div>
			</div>
            </main>
		</div>
	);
};
export default Account;
