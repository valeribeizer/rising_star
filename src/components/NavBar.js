import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/img/logo.png';

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            styles={{ minWidth: 100, minHeight: 100 }}
            src={logo}
            alt="logo"
            onClick={() => onUpdateActiveLink("home")}
          />
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#aboutus"
              className={
                activeLink === "aboutus" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("aboutus")}
            >
              ABOUT US
            </Nav.Link>
            <Nav.Link
              href="#pricing"
              className={
                activeLink === "pricing" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("pricing")}
            >
              PRICING
            </Nav.Link>

            <Nav.Link
              href="#member"
              className={
                activeLink === "member" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("member")}
            >
              BECOME A MEMBER
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={
                activeLink === "contact" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("contacts")}
            >
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
