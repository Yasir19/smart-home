import { gql } from "@apollo/client";

<<<<<<< HEAD
export const LOGIN_CONTRACTOR = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			contractor {
				_id
				name
			}
		}
	}
`;
export const ADD_CONTRACTOR = gql`
	mutation addContractor(
		$name: String!
		$email: String!
		$password: String!
		$typeOfServices: String!
		$address: String!
		$driverLicense: String!
		$cert: String
		$serviceZipcode: String!
		$bio: String
		$photo: String
		$phoneNumber: String!
	) {
		addContractor(
			name: $name
			email: $email
			password: $password
			typeOfServices: $typeOfServices
			address: $address
			driverLicense: $driverLicense
			cert: $cert
			serviceZipcode: $serviceZipcode
			bio: $bio
			photo: $photo
			phoneNumber: $phoneNumber
		) {
			token
			contractor {
				_id
				name
			}
		}
	}
`;
export const ADD_USER = gql`
	mutation addUser(
		$userName: String!
		$firstName: String!
		$lastName: String!
		$email: String!
		$password: String!
		$phoneNumber: String!
		$address: String!
	) {
		addUser(
			userName: $userName
			firstName: $firstName
			lastName: $lastName
			email: $email
			password: $password
			phoneNumber: $phoneNumber
			address: $address
		) {
			token
			User {
				_id
				name
			}
		}
	}
=======
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        userName
      }
    }
  }
`;
export const ADD_USER = gql`
  mutation addUser(
    $userName: String!
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $phoneNumber: String!
    $address: String!
    $role: String!
    $typeOfServices: String
    $serviceZipcode: String
  ) {
    addUser(
      userName: $userName
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      phoneNumber: $phoneNumber
      address: $address
      role: $role
      typeOfServices: $typeOfServices
      serviceZipcode: $serviceZipcode
    ) {
      token
      user {
        _id
        userName
        email
        role
      }
    }
  }
>>>>>>> a7dd9b5f8a790aa1d159d9eda1d90b301456f584
`;
export const ADD_OFFER = gql`
  mutation addOffer($projectId: ID!, $newOffer: String!) {
    addOffer(projectId: $projectId, newOffer: $newOffer) {
      _id
      offers {
        ContractorName
      }
    }
  }
`;
export const ADD_PROJECT = gql`
  mutation addProject(
    $projectDescription: String!
    $projectMaterials: String!
    $projectZipCode: String!
    $initPrice: String!
  ) {
    addProject(
      projectDescription: $projectDescription
      projectMaterials: $projectMaterials
      projectZipCode: $projectZipCode
      initPrice: $initPrice
    ) {
      _id
      initPrice
      projectDescription
      projectMaterials
      yourName
    }
  }
`;
