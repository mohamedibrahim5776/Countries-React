import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png'
import './Nav.css'

const Navs = () => {
    return (
        <Navbar expand="lg">
        <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} title="logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">about us</Nav.Link>
                <Nav.Link href="#explore">explore foods</Nav.Link>
                <Nav.Link href="#review">review</Nav.Link>
                <Nav.Link href="#faq">faq</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link id="lastNav" >25683937</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>

    )
}

export default Navs