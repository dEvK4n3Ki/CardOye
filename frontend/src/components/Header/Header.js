import React, { Component } from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap';
import './Header.css'

import { faSignOutAlt, faSignInAlt, faBlog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { authenticationService } from '../../services';

// import logo from '../../assets/logo_transparent.png';
export default class Header extends Component {
	render() {
		return (
			<Navbar collapseOnSelect expand="lg">
				<Navbar.Brand href="/">
					Card<span style={{ color: "#806D40"}}>Oye</span>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto"></Nav>
					<Nav>
						<Nav.Link href="/blog">
							<FontAwesomeIcon icon={faBlog} color="white" /> &nbsp;Blog
						</Nav.Link>
						{
							(() => {
								if (authenticationService.currentUserValue) {
									return <Button className="nav-button" variant="transparent" onClick={authenticationService.logout}>
										Logout &nbsp;
										<FontAwesomeIcon icon={faSignOutAlt} color="white" />
									</Button>
								}
								else {
									return <Nav.Link href="/login">
										Login/Signup &nbsp; <FontAwesomeIcon icon={faSignInAlt} color="white" />
									</Nav.Link>
								}
							})()
						}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		)
	}
}
