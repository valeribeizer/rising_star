import { Container, Row, Col } from "react-bootstrap";
import gymnasts from '../assets/img/contacts_info_img.png';
import 'animate.css';
import TrackVisibility from "react-on-screen";

const Contacts = () => {
  return (
    <section className="contacts" id="contacts">
      <Container>
        <h1>Contacts</h1>
        <div className="contacts-bx">
          <Row>
            <Col>
              <h3>If you want to ask something feel free to get in touch</h3>
            </Col>
          </Row>
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "" : ""}>
                <Row>
                  <Col>
                    <Row>
                      <h2>Email</h2>
                      <p>rg.risingstar@gmail.com</p>
                    </Row>
                    <Row>
                      <h2>Phone</h2>
                      <p>073 948 66 76</p>
                    </Row>
                    <Row>
                      <h2>Address</h2>
                      <p>c/o Garik Tevosyan</p>
                      <p>Tallskogsränd 9</p>
                      <p>165 76 Hässelby</p>
                    </Row>
                  </Col>
                  <Col
                    className={
                      isVisible
                        ? "animate__animated animate__fadeIn  animate__slow"
                        : ""
                    }
                  >
                    <img src={gymnasts} alt="gymnasts" />
                  </Col>
                </Row>
              </div>
            )}
          </TrackVisibility>
        </div>
      </Container>
    </section>
  );
};

export default Contacts;
