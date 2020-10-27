import React, { Component } from 'react';
import logo from '../images/logo.png';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, FormControl, Button } from 'react-bootstrap';
import { FaPhoneAlt } from 'react-icons/fa';

class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <Navbar bg="light" expand="lg" className="customNav">
                        <Navbar.Brand href="#home"><img src={logo} alt="" className="logo" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto myNav">
                                <Nav.Link href="#home">HOME</Nav.Link>
                                <Nav.Link href="#link">ABOUT US</Nav.Link>
                                <Nav.Link href="#link">SERVICES</Nav.Link>
                                <Nav.Link href="#link">JOB SEEKERS</Nav.Link>
                                <Nav.Link href="#link">EMPLOYERS</Nav.Link>
                                <Nav.Link href="#link" className="navPosition">CONTACT</Nav.Link>
                                <Nav.Link href="#link" className="contactLi">
                                    <div className="d-flex phoneColor align-items-center">
                                        <FaPhoneAlt className="mr-2 navphone" />
                                        <p>{this.props.numer}</p>
                                    </div>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        )
    }
}
export default Header;
