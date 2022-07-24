import { Nav, Col, Row, Container, Tab, Card } from "react-bootstrap";

const AboutUs = () => {
  const buttonClicked = () => {
    const url =
      "https://drive.google.com/file/d/1K0iqY3V7CjfHwNzqi2a_UkFsEahrRnzV/view?usp=sharing";
    window.open(url, '_blank');
}

  return (
    <section className="about" id="aboutus">
      <Container>
        <Row>
          <Col>
            <h1>About Us</h1>
            <h2>Our club was founded in 2022 year</h2>
            <Tab.Container id="aboutUs-tabs" defaultActiveKey="board">
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link eventKey="board">Board</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="values">Core values</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="statute">Statute</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="board">
                  <Card>
                    <Card.Body>
                      <Row>
                        <h2>Chairman:</h2>
                        <p>Garik Tevosyan</p>
                        <h2>Members:</h2>
                        <p>Sofia Timofijewa</p>
                        <p>Aziz Zakiryarov</p>
                        <p>Snejana Samal</p>
                      </Row>
                    </Card.Body>
                  </Card>
                </Tab.Pane>
                <Tab.Pane eventKey="values">
                  <Card>
                    <Card.Body>
                      <Row>
                        <p>
                          Our values are the guiding principle for members,
                          leaders and everyone else who represents GK Rising
                          Star. We create community and security for the
                          gymnasts and everyone else involved in relation to
                          each other, the sport and the outside world. In this
                          way, all our activities develop into a community that
                          creates joy and well-being.
                        </p>
                      </Row>
                    </Card.Body>
                  </Card>
                </Tab.Pane>
                <Tab.Pane eventKey="statute">
                  <Card>
                    <Card.Body>
                      <Row>
                        <button onClick={buttonClicked}>
                          Click here!
                        </button>
                      </Row>
                    </Card.Body>
                  </Card>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
