import { gql } from "@apollo/client";

export const QUERY_PROJECTS = gql`
	query projects($userName: String) {
		projects(userName: $userName) {
			_id
			projectDescription
			projectMaterials
			initPrice
			userName
		}
	}
`;
export const QUERY_PROJECT = gql`
	query project($id: ID!) {
		project(_id: $id) {
			_id
			projectDescription
			projectMaterials
			initPrice
			userName
		}
	}
`;
export const QUERY_CUSTOMER = gql`
{
	loggedUser
	   {
	  _id
	  userName
	  email
	  projects {
		initPrice
		projectDescription
		projectZipCode
		projectMaterials
	  }
	}
  }
`;

export const QUERY_USER = gql`
	query user($userName: String!) {
		user(userName: $userName) {
			_id
			userName
			email
			projects {
				_id
				projectDescription
				initPrice
			}
		}
	}
`;
