// import the gql template function
const { gql } = require("apollo-server-express");
const typeDefs = gql`
type User {
    _id:ID
    userName:String
    firstName:String
    lastName:String
    email:String
    password:String
    phoneNumber:String
    address:String
    role:String
    typeOfServices:String
    serviceZipcode:String
    projects:[Projects]
}
type Projects {
    _id:ID
    projectDescription:String
    projectMaterials:String
    projectZipCode:String
    userName:String
    initPrice:String
    offers:[Offer]
}
type Offer{
    _id:ID
    ContractorName:String
    newOffer:String
    createdAt:String
}
type Query {
loggedUser : User
users:[User]
user(userName:String!): User
projects(userName: String): [Projects]
project(_id: ID!): Projects
}
type Mutation {
    login (email:String!, password: String!): Auth
    addUser(userName:String!, firstName:String!, lastName:String!, email:String!, password:String!, phoneNumber:String!, address:String!,role:String,typeOfServices:String,serviceZipcode:String ): Auth
    addOffer(projectId: ID!,newOffer:String! ):Projects
    addProject(projectDescription:String!, projectMaterials:String!, projectZipCode:String!, initPrice:String!):Projects
}
type Auth {
    token: ID!
    user: User
}
`;
// export the typeDefs
module.exports = typeDefs;
