import React from "react";
import Hero from "./Hero";
import {
  Container,
  Row,
  Col,
  Image,
  Accordion,
  Card,
  Button,
} from "react-bootstrap";
import woman2 from "./images/woman2.jpg";
import woman1 from "./images/woman1.jpg";
import Testimonials from "./Testimonials";
const accordionData = [
  {
    eventKey: "0",
    header: "Accordion1",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
  },
  {
    eventKey: "1",

    header: "Accordion2",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
  },
  {
    eventKey: "2",

    header: "Accordion3",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
  },
  {
    eventKey: "3",

    header: "Accordion4",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
  },
];

const Home = () => {
  return (
    <div>
      <Hero />
      <section>
        <h2>Top 15 trending jewlery</h2>
        <p>keto do te hidhen nga databaza</p>
      </section>
      <h2>Who are we</h2>
      <Container>
        <Row>
          <Col lg={6} xs={12}>
            <Image
              src={woman1}
              style={{ objectFit: "cover", width: "100%", height: "400px" }}
              alt="woman wearing jewlery"
            />
          </Col>
          <Col lg={6} className="py-3">
            <p>
              Mejuri brand ambassador and professional tennis player Emma
              Navarro isn’t just on the rise—she’s here. After dominating as a
              junior tennis player, Emma has made her mark on the pro circuit
              with a unique energy and sharp game. But it’s not just her skills
              that stand out; it’s the perfect blend of humility and fun she
              brings to the sport–all while climbing the highest ranks.
            </p>
          </Col>
        </Row>
      </Container>
      <section>
        <h2>New arrivals</h2>
        <p>keto do te hidhen nga databaza</p>
      </section>
      <Container className="text-center my-5">
        <h2>Frequently asked questions </h2>
        <Row className="justify-content-center">
          <Col>
            <Accordion>
              {accordionData.map((accordion) => {
                return (
                  <Accordion.Item
                    eventKey={accordion.eventKey}
                    key={accordion.eventKey}
                  >
                    <Accordion.Header>{accordion.header}</Accordion.Header>
                    <Accordion.Body> {accordion.body} </Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          </Col>
        </Row>
      </Container>
      <section>
        <Testimonials />
      </section>
    </div>
  );
};

export default Home;
