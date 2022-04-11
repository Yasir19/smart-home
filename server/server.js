const express = require('express');
const { ApolloServer } = require('apollo-server-express')

const path = require('path');
const {authMiddleware}= require('./utils/auth')

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
