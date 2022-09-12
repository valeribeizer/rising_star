import { Nav, Col, Row, Container, Tab, Card } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";

const AboutUs = () => {
  const buttonClicked = () => {
    const url =
      "https://drive.google.com/file/d/1B73xSG3sv6Nvmv7M0LMVtFKgqsuAA_7E/view?usp=sharing";
    window.open(url, '_blank');
}

const hjorthagshallen = () => {
  const url = "https://goo.gl/maps/wCxeYcXB5TssFLpt5";
  window.open(url, '_blank');
};

const sofiaskola = () => {
  const url = "https://goo.gl/maps/QT4vumJjwxAdG9BU7";
  window.open(url, "_blank");
};

const solbergaskolan = () => {
  const url = "https://goo.gl/maps/XYxeP7MFPq2KeDni7";
  window.open(url, "_blank");
};

const husbygardsskolan = () => {
  const url = "https://goo.gl/maps/MevDoJUR94XPXWqK9";
  window.open(url, "_blank");
};

const gullingeskolan = () => {
  const url = "https://goo.gl/maps/8N7JhE8Cn9oKV2i8A";
  window.open(url, "_blank");
};

  return (
    <section className="about" id="aboutus">
      <Container>
        <Row>
          <Col>
            <h1>About Us</h1>
            <h2>Our club was founded in 2022</h2>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "" : ""}>
                  <Tab.Container id="aboutUs-tabs" defaultActiveKey="locations">
                    <Nav variant="pills">
                      <Nav.Item>
                        <Nav.Link eventKey="locations">Locations</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="board">Board</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="values">Values</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="statute">Statute</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="fadeIn"
                      className={
                        isVisible
                          ? "animate__animated animate__fadeIn animate__delay-1s"
                          : ""
                      }
                    >
                      <Tab.Pane eventKey="locations">
                        <Card>
                          <Card.Body>
                            <Row
                              className={
                                isVisible
                                  ? "animate__animated animate__fadeIn animate__delay-1s"
                                  : ""
                              }
                            >
                              <h2>We are located in:</h2>
                              <p onClick={husbygardsskolan}>Husbygårdsskolan</p>
                              <p onClick={gullingeskolan}>Gullingeskolan</p>
                              <p onClick={solbergaskolan}>Solbergaskolan</p>
                              <p onClick={sofiaskola}>Sofia Skola</p>
                              <p onClick={hjorthagshallen}>Hjorthagshallen</p>
                            </Row>
                          </Card.Body>
                        </Card>
                      </Tab.Pane>
                      <Tab.Pane eventKey="board">
                        <Card>
                          <Card.Body>
                            <Row
                              className={
                                isVisible
                                  ? "animate__animated animate__fadeIn animate__delay-1s"
                                  : ""
                              }
                            >
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
                            <Row
                              className={
                                isVisible
                                  ? "animate__animated animate__fadeIn animate__delay-1s"
                                  : ""
                              }
                            >
                              <p>
                                Our values are the guiding principle for
                                members, leaders and everyone else who
                                represents GK Rising Star. We create community
                                and security for the gymnasts and everyone else
                                involved in relation to each other, the sport
                                and the outside world. In this way, all our
                                activities develop into a community that creates
                                joy and well-being.
                              </p>
                            </Row>
                          </Card.Body>
                        </Card>
                      </Tab.Pane>
                      <Tab.Pane eventKey="statute">
                        <Card>
                          <Card.Body>
                            <Row
                              class="col-md-12 text-center"
                              className={
                                isVisible
                                  ? "animate__animated animate__fadeIn animate__delay-1s"
                                  : ""
                              }
                            >
                              <div className="centered">
                                <button
                                  className="btn btn-default"
                                  onClick={buttonClicked}
                                >
                                  Click for view document in Google.Docs!
                                </button>
                              </div>
                            </Row>
                          </Card.Body>
                        </Card>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
