import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import aboutPhoto from "./images/aboutfoto.avif";
import owner from "./images/owner.jpg";
import woman2 from "./images/woman2.jpg";
import store1 from  './images/store1.jpg';
const About = () => {
  return (
    <div>
      <Container fluid className="p-0 m-0">
        <Row className="g-0">
          <Col
            lg={6}
            className="about-background d-flex align-items-center justify-content-center text-center"
          >
            <h1> WE ARE ON A MISSION TO REFINE LUXURY </h1>
          </Col>
          <Col lg={6}>
            <Image src={aboutPhoto} fluid />
          </Col>
        </Row>
      </Container>
      <section className="w-75 m-auto my-5">
        <p className="fw-bold fs-6">
          Since being founded in 2015, Mejuri has turned fine jewelry into an
          everyday occasion while working towards making a positive impact in
          our communities, the industry, and the world.
        </p>
        <p>
          Because jewelry is an expression of self, and how you show up in the
          world should have no limits. That’s why we work with trusted suppliers
          across the globe, using high-quality, responsibly-sourced materials to
          create pieces meant to last a lifetime—that feel like you.
        </p>
      </section>
      <section
        fluid
        style={{ backgroundColor: "beige", height: "3em", width: "100%" }}
      >
        <p>our values our values our values our values</p>
      </section>
      <Container fluid className="my-5">
        <Row>
          <Col lg={6}>
            <h1 className="fw-bold"> Our desgins </h1>
            <p>
              We are increasing our positive impact on people and the planet
              through how we design our jewelry, where we source our materials,
              and how we operate our business.
            </p>
            <p>
              Each week, we release new products, designed in-house, in limited
              quantities and only manufacture more based on consumer demand.
              This allows us to curate fresh products while keeping our
              production less wasteful.
            </p>
          </Col>
          <Col lg={6}>
            <Image src={woman2} className="photo-default" fluid />
          </Col>
        </Row>
      </Container>
      <Container fluid className="my-5">
        <Row>
          <Col lg={6}>
            <Image src={owner} className="photo-default" fluid />
          </Col>
          <Col lg={6}>
            <h1 className="fw-bold"> A word from the funder </h1>
            <p>
              We are increasing our positive impact on people and the planet
              through how we design our jewelry, where we source our materials,
              and how we operate our business.
            </p>
            <p>
              Each week, we release new products, designed in-house, in limited
              quantities and only manufacture more based on consumer demand.
              This allows us to curate fresh products while keeping our
              production less wasteful.
            </p>
          </Col>
        </Row>
      </Container>
      <Container fluid className="my-5">
        <Row>
          
          <Col lg={6}>
            <h1 className="fw-bold"> Mission and vision</h1>
            <p>
              We are increasing our positive impact on people and the planet
              through how we design our jewelry, where we source our materials,
              and how we operate our business.
            </p>
            <p>
              Each week, we release new products, designed in-house, in limited
              quantities and only manufacture more based on consumer demand.
              This allows us to curate fresh products while keeping our
              production less wasteful.
            </p>
          </Col>
          <Col lg={6}>
            <Image src={store1} className="photo-default" fluid />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
