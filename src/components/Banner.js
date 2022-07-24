import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import bannerImg from '../assets/img/banner_img1.png';

const Banner = () => {
  const toRotate = "Rising Star";
  const [text, setText] = useState("");
  const period = 300;


  useEffect(() => {
      let  ticker = setInterval(() => {
          tick();
      }, period)

      return () => {
          clearInterval(ticker);
      }
  }, [text]);

     const tick = () => {
       let updatedText = toRotate.substring(0, text.length + 1);
       setText(updatedText);
     };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-item-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to our page</span>
            <h1>
              {`Gymnastics club `}
              <span className="wrap">{text}</span>
            </h1>
            <p>
              Gymnastics club "Rising Star" has the task of providing gymnastics
              for children, youth and adults, men and women. Our idea is to
              play, train and compete. With the sport we want to provide
              physical, mental, social and cultural development.
            </p>
            <button onClick={<a href="localhost:3000/#member" />}>
              Become a member
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={bannerImg} alt="header gymnasts" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;