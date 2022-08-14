import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { scroller } from "react-scroll";
import bannerImg from '../assets/img/banner_img1.png';
import  'animate.css';
import TrackVisibility from "react-on-screen";

const Banner = () => {
  const toRotate = "Rising Star";
  const [text, setText] = useState("");
  const period = 300;

  const scrollToSection = () => {
    scroller.scrollTo("member", {
      duration: 300,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -50,
    });
  };

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
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate_fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to our page</span>
                  <h1>{`Gymnastics club `}</h1>
                  <h2>
                    <span className="wrap">{text}</span>
                  </h2>
                  <p>
                    Gymnastics club "Rising Star" has the task of providing
                    gymnastics for children, youth and adults, men and women.
                    Our idea is to play, train and compete. With the sport we
                    want to provide physical, mental, social and cultural
                    development.
                  </p>
                  <button onClick={scrollToSection}>Become a member</button>
                </div>
              )}
            </TrackVisibility>
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