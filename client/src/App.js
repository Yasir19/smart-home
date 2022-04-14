import React from "react";
import Nav from "./components/Nav";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Clogin from './pages/Clogin';
import Csignup from "./pages/Csignup";
import Home from "./pages/Home";
import Project from "./pages/Project";
import NoMatch from'./pages/NoMatch';


const HttpLink = createHttpLink({
  uri: "/graphql",
});
const client = new ApolloClient({
  link: HttpLink,
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
        <Route exact path='/login' component={Clogin}/>
        <Route exact path='/signup' component={Csignup}/>
        <Route exact path='/project/:id' component={Project}/>

        <Route component={NoMatch}/>
        </Switch>
      </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
