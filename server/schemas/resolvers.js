const {Contractor} = require('../models');
// const {AuthenticationError} = require('apollo-server-express');
// const {signToken } = require('../utils/auth');
const resolvers = {
    // query section 
    Query: {
        contractors: async () => {
            return Contractor.find()
            .select('-__v -password')
        },
    }

}
module.exports = resolvers;
// Mutations: {
//     addContractor: async (parent, args) => {
//         const contractor = await Contractor.create(args);
//         const token = signToken(contractor);
//         return{ token, contractor}
//     },
// }