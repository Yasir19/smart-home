import { gql } from "@apollo/client";

export const LOGIN_CONTRACTOR = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      contractor {
        _id
        username
      }
    }
  }
`;
export const ADD_CON = gql`
mutation addContractor($username:String!, $email:String!, $password:String!, $typeOfServices:String!, $address:String!, $driverLicense:String!, $cert:String, $serviceZipcode:Int!, $bio:String, $photo:String, $phoneNumber:String!){
  addContractor(username:$username, email:$email, password:$password, typeOfServices:$typeOfServices, address:$address, driverLicense:$driverLicense, cert:$cert, serviceZipcode:$serviceZipcode, bio:$bio, photo:$photo, phoneNumber:$phoneNumber){
      token
      contractor{ 
          _id
          username
      }
    }
}
`;
