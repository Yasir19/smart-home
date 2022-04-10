// import the gql template function
const {gql} = require('apollo-server-express');
const typeDEFS = gql`
type Contractor {
    _id:ID
    firstName:String
    lastName:String
    email:String
    typeOfServices:String
    cert:String
    bio:String
    photo:String
    phoneNumber:Number
}
type Mutation {
addContractor(firstName:String!, lastName:String!,email:String!, password:String!,typeOfServices:String!,cert:String, bio:String,photo:String,phoneNumber:Number)
}
type Auth {
    token: ID!
    user:Contractor
}
`