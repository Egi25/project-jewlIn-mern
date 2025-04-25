import React from "react";
import { href, useNavigate } from "react-router-dom";
import vethe from "./images/vethe.jpg";
import unaza from "./images/unaza.jpg";
import varse from "./images/varse.jpg";
import byzylyk from "./images/byzylyk.jpg";
import gift from "./images/gift.jpg";
import men from "./images/men.jpg";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import Aos from "aos";

const collectionsData = [
  {
    id: "1",
    category: "Earings",
    photo: vethe,
    href:"/earrings/"
  },
  {
    id: "2",
    category: "Necklaces",
    photo: varse,
    href:"/necklaces/"
  },
  {
    id: "3",
    category: "Bracelets",
    photo: byzylyk,
    href:"/bracelets/"
  },
  {
    id: "4",
    category: "Rings",
    photo: unaza,
    href:"/rings/"
  },
  {
    id: "4",
    category: "Gift Ideas",
    photo: gift,
  },
  {
    id: "4",
    category: "For Men",
    photo: men,
    href: "/contact/",
  },
];
const Collections = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Row className="g-4 font1">
        {" "}
        <h2>Our Products</h2>
        {collectionsData.map((collections) => (
          <Col key={collections.id} xs={12} sm={6} md={4} lg={4}>
            <Card className="store-card img-fluid image-animation">
              <Card.Img
                variant="top"
                src={collections.photo}
                className="store-img "
                onClick={() => navigate(collections.href)} // navigate to specific href
                style={{ cursor: "pointer" }}
                data-aos="fade-up"
              />
              <Card.Body>
                <Card.Title>{collections.category}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Collections;
