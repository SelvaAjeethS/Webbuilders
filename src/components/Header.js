import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "./Header.css";

function Header() {
  return (
    <Navbar expand="lg" className="navbar-dark py-2">
      <Container className="text-center">
        <Navbar.Brand href="#home" className="fw-bold text-white">
          <img
            src="/assets/logo.avif"
            alt="WebBuilders Logo"
            width="50"
            height="50"
            className="d-inline-block align-center me-2"
          />
          WebBuilders
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto justify-content-center">
            <Nav.Link href="#features" className="text-light nav-link-hover">
              Features
            </Nav.Link>
            <Nav.Link href="#services" className="text-light nav-link-hover">
              Services
            </Nav.Link>
            <Nav.Link href="#reviews" className="text-light nav-link-hover">
              Advantages
            </Nav.Link>
            <Nav.Link href="#reviews" className="text-light nav-link-hover">
              Reviews
            </Nav.Link>
            <Nav.Link href="#pricing" className="text-light nav-link-hover">
              Pricing
            </Nav.Link>
            <Nav.Link href="#faq" className="text-light nav-link-hover">
              FAQ
            </Nav.Link>
            <Nav.Link href="#contact" className="text-light nav-link-hover">
              Contact
            </Nav.Link>
            <Button id="remixbtn" variant="outline-light" className="ms-3">
              REMIX
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
