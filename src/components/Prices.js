import { Container, Row, Col, Card } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import CustomRightArrow from './CustomRightArrow';
import CustomLeftArrow from './CustomLeftArrow';
import 'react-multi-carousel/lib/styles.css';

const  Prices = () => {
    const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

    return (
      <section className="prices" id="prices">
        <Container>
          <h1>Prices</h1>
          <Row>
            <Col>
              <div className="prices-bx">
                <p>These prices are valid for autumn term</p>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="prices-slider"
                  customRightArrow={<CustomRightArrow />}
                  customLeftArrow={<CustomLeftArrow />}
                >
                  <Card>
                    <Card.Body>
                      <div className="item">
                        <h4>Membership fee</h4>
                        <p>250 kronas per year</p>
                      </div>
                    </Card.Body>
                  </Card>

                  <Card>
                    <Card.Body>
                      <div className="item">
                        <h4>Beginners</h4>
                        <h5>1 time a week:</h5>
                        <p>1600 kronas</p>
                        <h5>2 times a week:</h5>
                        <p>2500 kronas</p>
                      </div>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body>
                      <div className="item">
                        <h4>Intermediate level</h4>
                        <h5>1 time a week:</h5>
                        <p>1800 kronas</p>
                        <h5>2 times a week:</h5>
                        <p>2700 kronas</p>
                        <h5>3 times a week:</h5>
                        <p>3500 kronas*</p>
                      </div>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body>
                      <div className="item">
                        <h4>Stretching for adults</h4>
                        <h5>1 class:</h5>
                        <p>150 kronas</p>
                      </div>
                    </Card.Body>
                  </Card>
                </Carousel>
                <h5>
                  Sign * means: opportunity to visit more than 3 trainings a
                  week without additional fees.
                </h5>
                <h5>
                  Also you get discount 10% if more than 1 girl does gymnastics
                  in our club.
                </h5>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
};

export default Prices;