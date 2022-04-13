// import the gql template function
const { gql } = require("apollo-server-express");
const typeDefs = gql`
type Contractor {
    _id:ID
    name:String
    email:String
    typeOfServices:String
    serviceZipcode:String
    cert:String
    bio:String
    photo:String
    phoneNumber:String
}
type User {
    _id:ID
    userName:String
    firstName:String
    lastName:String
    email:String
    password:String
    phoneNumber:String
    address:String
}
type Projects {
    _id:ID
    projectDescription:String
    projectMaterials:String
    yourName:String
    initPrice:String
  

}
type Query {
loggedContractor : Contractor
loggedUser : User
users:[User]
user(name:String!): User
contractors:[Contractor]
contractor(name:String!): Contractor
projects(yourName: String): [Projects]
}
type Mutation {
    login (email:String!, password: String!): Auth
    ulogin (email:String!, password: String!): Auth
    addContractor(name:String!,email:String!, password:String!,typeOfServices:String!,address:String!,driverLicense:String!,cert:String,serviceZipcode:String!, bio:String,photo:String,phoneNumber:String!): Auth
    addUser(userName:String!, firstName:String!, lastName:String!, email:String!, password:String!, phoneNumber:String!, address:String!): Auth
}
type Auth {
    token: ID!
    contractor: Contractor
    user: User
}
`;
// export the typeDefs
module.exports = typeDefs;
