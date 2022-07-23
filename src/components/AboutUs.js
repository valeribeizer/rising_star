import { Nav, Col, Row, Container, Tab, Card } from "react-bootstrap";
import GoogleDocsViewer from "react-google-docs-viewer";

const AboutUs = () => {
  return (
    <section className="about" id="aboutus">
      <Container>
        <Row>
          <Col>
            <h2>About Us</h2>
            <h5>Our club was founded in 2022 year</h5>
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
                        <h1>Chairman:</h1>
                        <p>Garik Tevosyan</p>
                        <h1>Members:</h1>
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
                        <GoogleDocsViewer
                          align="center"
                          width="600px"
                          height="780px"
                          fileUrl="https://docs.google.com/document/d/1liMJEFKnmMD5wvZZnfQDTbg4U7NwdaY2eOuWjVEug2E"
                        />
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
