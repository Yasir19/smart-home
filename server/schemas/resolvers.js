const {Contractor} = require('../models');
const {AuthenticationError} = require('apollo-server-express');
// const {signToken } = require('../utils/auth');
const resolvers = {
    // query section 
    Query: {
        // get all contractors 
        contractors: async () => {
            return Contractor.find()
            .select('-__v -password')
        },
        // get contractor by name 
        contractor: async(parent, {name}) => {
            return Contractor.findOne({name})
            .select('-__v -password')
        }
    },
    Mutation: {
        addContractor: async (parent, args) => {
            const contractor = await Contractor.create(args)

            return contractor;

        }, 
        login: async () => {

        }
    }

}
module.exports = resolvers;
