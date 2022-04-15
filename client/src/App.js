import React from "react";
import Nav from "./components/Nav";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Clogin from './components/Login/Clogin';
import Csignup from "./components/SignUp/Csignup";
import Home from "./components/ProjectBoard/Home";
import Project from "./components/SingleProject/Project";
import NoMatch from'./components/NoMatch/NoMatch';
import UserSignup from "./components/SignUp/UserSignup";
import JobBoard from "./components/JobBoard/jobBoard";
// import {setContext} function for apollo client to retrieve the token
import {setContext} from '@apollo/client/link/context';



const HttpLink = createHttpLink({
  uri: "/graphql",
});
// middleware function to retrieve the token and combine it with the existing httpLink
const authLink = setContext((_,{headers})=>{
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token? `Bearer ${token}`:'',
    },
  }
})
const client = new ApolloClient({
  //combine authLink with the existing httpLink
  link: authLink.concat(HttpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <Nav/>
        <div className="container"></div>
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path="/jobBoard" component={JobBoard}/>
        <Route exact path='/login' component={Clogin}/>
        <Route exact path='/signup' component={Csignup}/>
        <Route exact path='/project/:id' component={Project}/>
        <Route exact path="/UserSignup" component={UserSignup} />
        <Route component={NoMatch}/>
        </Switch>
      </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
