import { Container, Row, Col } from "react-bootstrap"

const Contacts = () => {
    return (
      <section className="contacts" id="contacts">
        <Container>
          <h1>Contacts</h1>
          <div className="contacts-bx">
            <Row>
              <Col>
                <p>If you want to ask something feel free to get in touch</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <h2>Email</h2>
                <p>rg.risingstar@gmail.com</p>
              </Col>
              <Col>
                <h2>Phone</h2>
                <p>0739486676</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <h2>Address</h2>
                <p>c/o Garik Tevosyan</p>
                <p>Tallskogsränd 9</p>
                <p>165 76 Hässelby</p>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    );
};

export default Contacts;