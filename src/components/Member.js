import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import contactImg from "../assets/img/contact_img.png";
import emailjs from "emailjs-com";
import { Checkbox } from "@progress/kendo-react-inputs";

const Member = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const checkboxTermsAndConditionsMessage = React.useMemo(
    () => "Please indicate that you accept the Terms and Conditions",
    []
  );

  const [buttonText, setButtonText] = useState("Send");
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [isChecked, setIsChecked] = useState(false);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      formDetails.firstName.length !== 0 &&
      formDetails.email.length !== 0 &&
      formDetails.phone.length !== 0 &&
      formDetails.message.length !== 0 &&
      isChecked
    ) {
      emailjs
        .sendForm(
          "service_s5hiexk",
          "template_ni0imaa",
          e.target,
          "g3lRXYQqlKOkmc1vN"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setFormDetails(formInitialDetails);
      setButtonText("Sent 🤗");
    } else {
      setButtonText("Check your fields!");
    }
  };

  return (
    <section className="member" id="member">
      <Container>
        <Row className="align-items-center">
          <h1>Become a Member</h1>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible
                      ? "animate__animated animate__bounce animate__slower"
                      : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <form onSubmit={sendEmail}>
              <Row>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="text"
                    placeholder="First Name*"
                    name="firstName"
                    value={formDetails.firstName}
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={formDetails.lastName}
                    name="lastName"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="email"
                    placeholder="Email Address*"
                    value={formDetails.email}
                    name="email"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="tel"
                    placeholder="Phone No.*"
                    value={formDetails.phone}
                    name="phone"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col size={12} className="px-1">
                  <textarea
                    rows="6"
                    placeholder="Message*"
                    value={formDetails.message}
                    name="message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  ></textarea>
                  <Col size={12} sm={6} className="px-1">
                    <Checkbox
                        id="ch1"
                        name="checkbox"
                        required={true}
                        validationMessage={checkboxTermsAndConditionsMessage}
                        checked={isChecked}
                        onChange={() => setIsChecked((prev) => !prev)}
                      >
                        <label
                          className="k-checkbox-label"
                          style={{
                            display: "inline-block",
                            paddingLeft: "10px",
                            fontSize: "14px",
                          }}
                          for="ch1"
                        >
                          By clicking you agree to our{" "}
                          <a href="https://drive.google.com/file/d/1fGGo0IA23P43TwUKKcPjZCylH6Oq_YKv/view?usp=sharing">
                            Terms and Conditions
                          </a>
                          .
                        </label>
                      </Checkbox>
                  </Col>
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Member;
