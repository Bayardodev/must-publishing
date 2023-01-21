import React, { Fragment } from 'react'
import { Link } from "react-router-dom";

import "./style.css"

export default function NavigationBar() {
	return (
		<Fragment>
			{/* <div className="navigation">
				<span style={{ i:'0', x:"-1", y:"0" }}>
					<i className="camera-outline"></i>
				</span>
				<span style={{ i:'1', x:"0", y:"0" }}>
					<i className="arrow-redo-circle-outline"></i>
				</span>
				<span style={{ i:'2', x:"1", y:"0" }}>
					<i className="arrow-undo-circle-outline"></i>
				</span>
				<span style={{ i:'3', x:"0", y:"1" }}>
					<i className="desktop-outline"></i>
				</span>
				<span style={{ i:'4', x:"-1", y:"-1" }}>
					<i className="logo-react" onclick="openDist()"></i>
				</span>
				<span style={{ i:'5', x:"1", y:"1" }}>
					<i className="qr-code-outline"></i>
				</span>
				<span style={{ i:'6', x:"-1", y:"-1" }}>
					<i className="logo-nodejs"></i>
				</span>
				<span style={{ i:'7', x:"-1", y:"1" }}>
					<i className="qr-code-outline"></i>
				</span>
				<span style={{ i:'8', x:"1", y:"-1" }}>
					<i className="logo-python"></i>
				</span>
			</div> */}
			<div className='nav-bar animated fadeIn'>
				<div className='d-flex justify-content-center mb-4'>
				</div>
				<div className='nav-content'>
					<div>
						<i className="bi bi-house-door"></i>
						<Link to='/'>Home</Link>
					</div>
					<div>
						<i className="bi bi-person-video2"></i>
						<Link to='/Intro'>About Me</Link>
					</div>
					<div>
						<i className="bi bi-hurricane"></i>
						<Link to='/Experience'>Experience</Link>
					</div>
					<div>
						<i className="bi bi-code-slash"></i>
						<Link to='/Languages'>Programming Language</Link>
					</div>
					<div>
						<i className="bi bi-person-fill"></i>
						<Link to='/Profile'>Profile</Link>
					</div>
				</div>
				<div className='sign-btn'>
					<Link to='/login'><span>Login</span></Link>
					<Link to='/signUp'><span>Sign-Up</span></Link>
				</div>
			</div>
		</Fragment>
	)
}
