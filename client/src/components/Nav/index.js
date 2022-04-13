import React, { useEffect } from "react";

function Nav(params) {
	return (
		<header className="flex-row px-1">
			<h2>
				<a data-testid="link" href="/">
					Smart Home
				</a>
			</h2>
			<nav>
				<ul className="flex-row">
					<li className="mx-2">
						<a data-testid="Your Home" href="#">
							Your Home
						</a>
					</li>
					<li className="mx-2">
						<a data-testid="Your Home" href="/createProject">
							Create your project
						</a>
					</li>
					<li className="mx-2">
						<a data-testid="join" href="/signup">
							Join Smart Team
						</a>
					</li>
					<li className="mx-2">
						<a data-testid="sign up" href="/UserSignup">
							Sign Up
						</a>
					</li>
					<li className="mx-2">
						<a data-testid="login" href="/login">
							Login
						</a>
					</li>
					<li className="mx-2">
						<a data-testid="log Out" href="#">
							Log Out
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Nav;
