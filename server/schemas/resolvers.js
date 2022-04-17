const {User, Createproject } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const { populate } = require("../models/User");
const resolvers = {
  // query section
  Query: {
      projects: async (parent,{userName}) => {
          const params = userName? {userName}: {};
          return Createproject.find(params)
      },
      project: async (parent, {_id}) => {
        return Createproject.findOne({_id})
      },
    loggedUser: async (parent, arags, context) => {
      if (context.user) {
        const userData = await User.findOne({
          _id: context.user._id,
        })
        .select("-__v -password")
        .populate("projects")

        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },
    // get all user
    user: async () => {
      return User.find()
      .select("-__v -password")
      .populate('projects');
    },

    user: async (parent, { userName }) => {
      return User.findOne({ userName })
      .select("-__v -password")
      .populate('projects');
    },
    // get all user
    users: async () => {
      return User.find().select("-__v -password");
    },
  },
  Mutation: {

    addOffer:async (parent, {projectId, newOffer}, context ) => {
      if(context.user){
        console.log(context.user)
        const offer = await Createproject.findByIdAndUpdate(
          {_id: projectId},
          {$push:{offers:{newOffer, ContractorName: context.user.name }}},
          {new:true}
        );
        return offer
      }
      console.log('error')
    },
    addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);
        return {token,user};
    },

    addProject: async(parent, args, context) => {
      if (context.user) {
        const project = await Createproject.create({ ...args, userName: context.user.userName })
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: {projects: project._id}},
          { new: true }
        )
        return project;
      }
      throw new AuthenticationError("Please Login to Continue")
    }, 

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!User) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const correctPassword = await user.isCorrectPassword(password);

      if (!correctPassword) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(user);
      return { token, user };
    },
  },
};
module.exports = resolvers;
