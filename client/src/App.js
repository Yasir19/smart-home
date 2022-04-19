import React from "react";
import {
	ApolloProvider,
	ApolloClient,
	InMemoryCache,
	createHttpLink,
} from "@apollo/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { setContext } from "@apollo/client/link/context";
import Login from "./components/Login/Login";
import Signup from "./components/SignUp/Signup";
import Home from "./components/HomePage/Home";
import Project from "./components/SingleProject/Project";
import NoMatch from "./components/NoMatch/NoMatch";
import Nav from "./components/Nav";
import YourProject from "./components/YourProject/index";
import CreateProject from "./components/CreateProject/CreateProject";
import Job from "./components/JobBoard/JobBoard";


const HttpLink = createHttpLink({
	uri: "/graphql",
});
// middleware function to retrieve the token and combine it with the existing httpLink
const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem("id_token");
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : "",
		},
	};
});
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
					<Nav />
					<div className="container"></div>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/YourProject/:userName?" component={YourProject} />
						<Route exact path="/signup" component={Signup} />
						<Route exact path="/project/:id" component={Project} />
						<Route exact path="/CreateProject" component={CreateProject} />
						<Route exact path="/Job" component={Job} />
						<Route component={NoMatch} />
					</Switch>
				</div>
			</Router>
		</ApolloProvider>
	);
}

export default App;
