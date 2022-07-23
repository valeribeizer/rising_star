import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/img/logo.png';

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.screenY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img
            styles={{ minWidth: 100, minHeight: 100 }}
            src={logo}
            alt="logo"
          />
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle> */}
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
            {/* <Nav.Link
              href="#schedule"
              className={
                activeLink === "schedule" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("schedule")}
            >
              Schedule
            </Nav.Link> */}
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
              href="#contacts"
              className={
                activeLink === "contacts" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("contacts")}
            >
              Contacs
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
