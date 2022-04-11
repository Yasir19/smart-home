// import the gql template function
const { gql } = require("apollo-server-express");
const typeDefs = gql`
type Contractor {
    _id:ID
    name:String
    email:String
    typeOfServices:String
    serviceZipcode:Int
    cert:String
    bio:String
    photo:String
    phoneNumber:String
}
type Query {
loggedContractor : Contractor
contractors:[Contractor]
contractor(name:String!): Contractor
}

type Mutation {
    login (email:String!, password: String!): Auth
    addContractor(name:String!,email:String!, password:String!,typeOfServices:String!,address:String!,driverLicense:String!,cert:String,serviceZipcode:Int!, bio:String,photo:String,phoneNumber:String!): Auth
}
type Auth {
    token: ID!
    contractor: Contractor
    
}
`;
// export the typeDefs
module.exports = typeDefs;
