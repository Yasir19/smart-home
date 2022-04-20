import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_CUSTOMER } from "../../utils/queries";
import { useParams, Redirect } from "react-router-dom";
const Account = () => {
    const { userName: userParam } = useParams();
	const { loading, data } = useQuery(QUERY_CUSTOMER, {
		variables: { userName: userParam },
	});
	const user = data?.loggedUser || {};
    console.log(user)
    return (
        <div>
            
            <p>UserName: {user.userName}</p>
            <p>Email: {user.email}</p>
            {/* <p>Last Name: {user.}</p> */}
        </div>
    )
}

export default Account;