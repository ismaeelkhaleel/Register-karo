import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Search } from "lucide-react";
import Logo from "../../assest/image/logo.png";

export default function Header() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="header-wrapper" style={{ zIndex: 10, position: "relative" }}>

      {/* Top Bar */}
      <div className="bg-primary text-white py-2">
        <Container className="d-flex justify-content-end align-items-center">
          <div className="d-flex gap-4">
            <a href="mailto:www.registerkaro.in" className="text-white text-decoration-none">
              <i className="bi bi-envelope"></i>&nbsp;&nbsp;www.registerkaro.in
            </a>
            <a href="tel:+918447746183" className="text-white text-decoration-none">
              <i className="bi bi-telephone"></i>&nbsp;&nbsp;+91844774618
            </a>
            <a href="#" className="text-white">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="text-white">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="text-white">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="text-white">
              <i className="bi bi-pinterest"></i>
            </a>
          </div>
        </Container>
      </div>

      {/* Main Navigation */}
      <Navbar expand="lg" className="bg-white shadow-sm" expanded={expanded}>
        <Container>
          <Navbar.Brand href="#home" className="py-2">
            <img
              src={Logo}
              alt="RegisterKaro Logo"
              width={180}
              height={50}
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fw-bold">
              <Nav.Link href="#home" className="px-3">
                Home
              </Nav.Link>
              <NavDropdown title="Our Services" id="basic-nav-dropdown" className="px-3">
                <NavDropdown.Item href="#action/3.1">Service 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Service 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Service 3</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#blog" className="px-3">
                Blog
              </Nav.Link>
              <Nav.Link href="#contact" className="px-3">
                Contact Us
              </Nav.Link>
              <Nav.Link href="#about" className="px-3">
                About Us
              </Nav.Link>
            </Nav>
            <div className="d-flex align-items-center gap-3">
              <button className="btn">
                <Search className="w-5 h-5" />
              </button>
              <button className="btn btn-warning px-4 rounded-1 fw-semibold">Talk An Expert</button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
