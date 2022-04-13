import React from "react";
import Nav from "./components/Nav";
import {
	ApolloProvider,
	ApolloClient,
	InMemoryCache,
	createHttpLink,
} from "@apollo/client";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Clogin from "./components/Login/Clogin";
import Csignup from "./components/SignUp/Csignup";
import UserSignup from "./components/SignUp/UserSignup";

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
					<Nav />
					{/* <div className="container"></div> */}
					<Route exact path="/login" component={Clogin} />
					<Route exact path="/signup" component={Csignup} />
					<Route exact path="/UserSignup" component={UserSignup} />
				</div>
			</Router>
		</ApolloProvider>
	);
}

export default App;
