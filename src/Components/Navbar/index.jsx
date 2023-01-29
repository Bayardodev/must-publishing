import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./style.css"

export default class Navbar extends Component {
	render() {
		return (
			<header>
			<section className="custom-header">
					<nav>
						<img src="../../../public/static/images/cool.png" alt="" />
						<ul>
							<li><Link to="/Home">Home</Link></li>
							<li><Link to="/Intro">About Me</Link></li>
							<li><Link to="/Service">Skills</Link></li>
							<li><Link to="/Product">Programming Language</Link></li>
							<li><Link to="/Contact">Profile</Link></li>
						</ul>
						<a className="login-btn ms-auto">Login</a>
						<div
							className="collapser ms-auto"
							// onClick={() => collapser()}
						>
							<p/>
							<p/>
							<p/>
						</div>
					</nav>
					{/* {
						open_sidebar
						&&
						<div className="sidebar">
							<NavigationBar/>
						</div>
					} */}
				</section>
			</header>
		);
  }
}
