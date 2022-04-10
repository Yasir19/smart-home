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
contractors:[Contractor]
}
`;
// export the typeDefs
module.exports = typeDefs;



// type Mutation {
// addContractor(firstName:String!, lastName:String!,email:String!, password:String!,typeOfServices:String!,cert:String, bio:String,photo:String,phoneNumber:Number)
// }
// type Auth {
//     token: ID!
//     user:Contractor