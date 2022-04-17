import { gql } from "@apollo/client";

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
      userName
    }
  }
`;
