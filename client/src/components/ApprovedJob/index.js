import React from "react";
import ApprovedList from '../ApprovedList'
import Auth from "../../utils/auth";
import { useParams, Redirect } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_CUSTOMER } from "../../utils/queries";
const ApprovedJob = () =>{
    const { userName: userParam } = useParams();
	const { loading, data } = useQuery(QUERY_CUSTOMER, {
		variables: { userName: userParam },
	});
	const user = data?.loggedUser || {};
    console.log(user)
	// redirect to personal profile page if username is the logged-in user's
	if (Auth.contractorLoggedIn() && Auth.getProfile().data.userName === userParam)
		return <Redirect to="/YourProject" />;
	if (loading) {
		return <div> loading ... </div>;
	}
	if (!user?.userName) {
		return (
			<h4>
				You need to be logged in to see this page. Use the navigation links
				above to sign up or log in
			</h4>
		);
	}
    return (
		<section className="approved-container">
			<div className="flex-row mb-3 title-container">
				<h2 className="bg-dark text-secondary p-3 display-inline-block">
					Viewing Approved Job
				</h2>
			</div>
			<div className="flex-row justify-space-between mb-3">
				<div className="col-12 mb-3 col-lg mb-3 approved-contents">
					{Auth.contractorLoggedIn() && <ApprovedList projects={user.projects} ></ApprovedList>}
				</div>
			</div>
			<div className="flex-row justify-space-between mb-3">
				<div className="col-12 mb-3 col-lg mb-3">
				</div>
				</div>
			
		</section>
    )
}
export default ApprovedJob