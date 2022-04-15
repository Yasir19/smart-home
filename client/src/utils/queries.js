import { gql } from '@apollo/client';

export const QUERY_PROJECTS = gql`
query projects($yourName: String){
  projects(yourName: $yourName) {
    _id
    projectDescription
    projectMaterials
    initPrice
    yourName
  }
}
`;
export const QUERY_PROJECT =gql`
query project($id:ID!) {
  project(_id: $id) {
    _id
    projectDescription
    projectMaterials
    initPrice
    yourName
  }
}
`;
export const QUERY_CUSTOMER =gql`
{
  loggedUser
     {
    _id
    userName
    email
  }
}
`;
