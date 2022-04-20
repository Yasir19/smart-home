import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

function Nav(params) {
	const logout = (e) => {
		e.preventDefault();
		Auth.logout();
	};
	return (
		<header className="flex-row px-1">
			<h1>
				<a data-testid="link" href="/">
					Smart Home
				</a>
			</h1>
			<nav>
				<ul className="flex-row">
					{Auth.LoggedIn() ? (
						<>
							{Auth.customerLoggedIn() ? (
								<>
									<li className="mx-2">
										<Link to="/CreateProject">Create Project</Link>
									</li>
									<li className="mx-2">
										<Link to="/YourProject">Your Project</Link>
									</li>
									<li className="mx-2">
										<Link to="/Account">Account</Link>
									</li>
									<li className="mx-2">
										<Link to="/ContactUs">Contact Us</Link>
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
										<Link to="/Job"> Job Board</Link>
									</li>
									<li className="mx-2">
										<Link to="/ApprovedJob">Missions</Link>
									</li>
									<li className="mx-2">
										<Link to="/Account">Account</Link>
									</li>
									<li className="mx-2">
										<Link to="/ContactUs">Contact Us</Link>
									</li>
									<li className="mx-2">
										<a data-testid="log Out" href="/" onClick={logout}>
											Log Out
										</a>
									</li>
								</>
							)}
						</>
					) : (
						<>
							<li className="mx-2">
								<Link to="login">Create Project</Link>
							</li>
							<li className="mx-2">
								<a data-testid="join" href="/Smarter">
									Join Our Smart Network
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
				</ul>
			</nav>
		</header>
	);
}

export default Nav;
