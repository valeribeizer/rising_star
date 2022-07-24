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
          />
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#aboutus"
              className={
                activeLink === "aboutus" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("aboutus")}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              href="#prices"
              className={
                activeLink === "prices" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("prices")}
            >
              Prices
            </Nav.Link>

            <Nav.Link
              href="#member"
              className={
                activeLink === "member" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("member")}
            >
              Become a Member
            </Nav.Link>
            <Nav.Link
              href="#contacts"
              className={
                activeLink === "contacts" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("contacts")}
            >
              Contacs
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
