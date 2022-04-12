import { gql } from "@apollo/client";

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
    $serviceZipcode: Int!
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
