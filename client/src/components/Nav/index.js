import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import CreateProject from "../CreateProject/CreateProject";

function Nav(params) {
<<<<<<< HEAD
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
=======
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
          <li className="mx-2">
            <a data-testid="Your Home" href="#">
              Your Home
            </a>
          </li>
          <li className="mx-2">
            <Link to="/CreateProject">Create Project</Link>
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
            {Auth.LoggedIn() ? (
              <>
                <Link to="/"> Home</Link>
                <Link to='/YourProject'>YourProject</Link>
                <a data-testid="log Out" href="/" onClick={logout}>
                  Log Out
                </a>
              </>
            ) : (
              <>
                <a data-testid="login" href="/login">
                  login
                </a>
              </>
            )}
          </li>
          <li className="mx-2"></li>
        </ul>
      </nav>
    </header>
  );
>>>>>>> a7dd9b5f8a790aa1d159d9eda1d90b301456f584
}

export default Nav;
