import { Container, Row, Col } from "react-bootstrap"
import footerIcon1 from '../assets/img/navIcon1.png';
import footerIcon2 from "../assets/img/navIcon2.png";

const Footer = () => {
    return (
      <footer className="footer">
        <Container>
          <Row className="text-end text-sm-end">
            <Col>
              <div className="social-icon">
                <a href="https://www.instagram.com/rg.risingstar">
                  <img src={footerIcon1} alt='instagram' />
                </a>
                <a href="https://www.facebook.com/rg.risingstar">
                  <img src={footerIcon2} alt='facebook' />
                </a>
              </div>
              <p>CopyRight 2022. All Right Reserved</p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
};

export default Footer;
