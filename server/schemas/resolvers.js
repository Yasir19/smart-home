const {Contractor} = require('../models');
const {AuthenticationError} = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const resolvers = {
    // query section 
    Query: {
        loggedContractor: async (parent, arags, context) => {
            if(context.contractor) {
                const contractorData = await Contractor.findOne({_id: context.contractor._id})
                .select('-__v -password')

                return contractorData
            }
            throw new AuthenticationError('Not logged in');
        },
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
            const token = signToken(contractor)
            return {token, contractor};

        }, 
        login: async (parent, { email, password}) => {
            const contractor = await Contractor.findOne({email});
            if(!contractor){
                throw new AuthenticationError('Incorrect credentials');
            }
            const correctPassword = await contractor.isCorrectPassword(password);

            if(!correctPassword){
                throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(contractor)
            return {token, contractor}

        }
    }

}
module.exports = resolvers;
