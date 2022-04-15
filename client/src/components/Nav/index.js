import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
// import CreateProject from "../CreateProject/CreateProject";
// import YourProject from "../YourProject/index";

function Nav(params) {
	const logout = (e) => {
		e.preventDefault();
		Auth.logout();
	};
	return (
		<header className="flex-row px-1">
			<h2>
				<a data-testid="link" href="/">
					Smart Home
				</a>
			</h2>
			<nav>
				<ul className="flex-row">
					{Auth.LoggedIn() ? (
						<>
							<li className="mx-2">
								<Link to="/"> Home</Link>
							</li>
							<li className="mx-2">
								<Link to="/Job"> Job Board</Link>
							</li>
							<li className="mx-2">
								<Link to="/CreateProject">Create Project</Link>
							</li>
							<li className="mx-2">
								<Link to="/YourProject">Your Project</Link>
							</li>
							<li className="mx-2">
								<a data-testid="log Out" href="/" onClick={logout}>
									Log Out
								</a>
							</li>
						</>
					) : (
						<>
							<li className="mx-2">
								<Link to="/CreateProject">Create Project</Link>
							</li>
							<li className="mx-2">
								<a data-testid="join" href="/signup">
									Join Smart Team
								</a>
							</li>
							<li className="mx-2">
								<a data-testid="login" href="/login">
									login
								</a>
							</li>

							<li className="mx-2">
								<a data-testid="join" href="/signup">
									Sign Up
								</a>
							</li>
						</>
					)}

					<li className="mx-2"></li>
				</ul>
			</nav>
		</header>
	);
}

export default Nav;
