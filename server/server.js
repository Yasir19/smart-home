const express = require('express');
const { ApolloServer } = require('apollo-server-express')

const path = require('path');
const {authMiddleware}= require('./utils/auth')

// require dependencies for contact form submission
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

//import typeDefs and resolver
const { typeDefs, resolvers } = require ('./schemas')
const db = require('./config/connection')


const PORT = process.env.PORT || 3001;
const app = express()
const startServer =  async () => {
    // create a new Apollo server and pass in our schema data 
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      context: authMiddleware 
    })
      // start the Apollo server 
      await server.start();
      // integrate our Apollo server with the Express application as middleware
      server.applyMiddleware({app})
      //log testing GQL API 
      console.log(`🚀 Use GraphQl at http://localhost:${PORT}${server.graphqlPath}`)
  }
   // initialize the Apollo server
   startServer();
   
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/", router);

// Replace the user and password with your account info to receive form submission to your email
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "smarthomeutbootcamp@gmail.com",
    pass: "algorithmunlock123",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

// serve up static assets
// if(process.env.NODE_ENV === 'production'){
//   app.use(express.static(path.join(__dirname, '../client/build')))
// }
// app.get('*', (req,res) => {
//     res.sendFile(path.join(__dirname,"../client/build/index.html"))
// });
db.once('open', () =>{
    app.listen(PORT, () => {
        console.log(`🌍 Connected on localhost:${PORT}`);

    })
})
