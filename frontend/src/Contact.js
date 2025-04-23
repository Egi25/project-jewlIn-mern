import React from "react";
import { Col, Container, Row, Button, Card } from "react-bootstrap";
import { Image } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import store1 from "./images/store1.jpg";
import store2 from "./images/store2.avif";
import store3 from "./images/store3.avif";
import piercing from "./images/piercing.jpg";
import appointment from "./images/appointment.webp";
const storesData=[
    {
        id:"1",
        photo: store3,
        city:"Tirana,Al",
        address:"Sulejman Delvina"
    },
    {
        id:"2",
        photo: store2,
        city:"Durres,Al",
        address:"Sulejman Delvina"
    },
    {
        id:"2",
        photo: store1,
        city:"Durres,Al",
        address:"Sulejman Delvina"
    },

]

const Contact = () => {
    
  return (
    <div>
      <Container fluid className="relative-container">
        <Row className="g-0">
          <Col lg={7} style={{ backgroundColor: "lightgray" }}>
            <div className="information">
              <h1 className="fw-bold text-center">Information</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet lobortis mi. Mauris enim ante, tempor semper rhoncus eget,
                maximus ut tellus. Etiam quis diam fermentum, lobortis neque
                vel.{" "}
              </p>
              <p className="mt-4">
                <i className="fa-brands fa-instagram"></i>
                <br /> sisal.beauty
              </p>
              <hr />
              <p className="mt-4">
                <i className="fa-solid fa-envelope"></i>
                <br /> sisal.beauty@gmail.com
              </p>
              <hr />
              <p className="mt-4">
                <i className="fa-solid fa-phone"></i>
                <br /> +355 677899015
              </p>
              <hr />
              <p className="mt-4">
                <i className="fa-solid fa-location-dot"></i>
                <br /> Rr. Sulejman Delvina
              </p>
            </div>
          </Col>
          <Col lg={5} xs="12">
            <Image src={store1} className="photo-default" />
          </Col>
        </Row>
        <div className="contact-container">
          <h2>Contact us here</h2>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Your Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Your last name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="email" placeholder="Your email" />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control as="textarea" rows={3} placeholder="Your message" />
            </Form.Group>
            <Button className="contact-btn" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Container>
      <div className="m-5 ">
        
        <Row className="g-4"> {/* g-4 = Bootstrap gutter spacing */}
        <h2>Stores and services</h2>
  {storesData.map((store) => (
    <Col key={store.id} xs={12} sm={6} md={4} lg={4}>
      <Card className="store-card img-fluid">
        <Card.Img variant="top" src={store.photo} className="store-img" />
        <Card.Body>
          <Card.Title>{store.city}</Card.Title>
          <Card.Text>{store.address}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
<Row className="g-4 mt-3"> {/* g-4 = Bootstrap gutter spacing */}
       
    <Col xs={12} sm={6} md={6} lg={6}>
      <Card className="img-fluid store-card">
        <Card.Img variant="top" src={piercing} className="store-img" />
        <Card.Body>
          <Card.Title>Piercing </Card.Title>
          <Card.Text>Chat with a stylist one-on-one for expert stacking advice. Available in-store.</Card.Text>
          <Button  href="/contact/"> Book appointment</Button>
        </Card.Body>
      </Card>
    </Col>
    <Col xs={12} sm={6} md={6} lg={6}>
      <Card className="img-fluid store-card">
        <Card.Img variant="top" src={appointment} className="store-img" />
        <Card.Body>
          <Card.Title>Style appointment  </Card.Title>
          <Card.Text>Chat with a stylist one-on-one for expert stacking advice. Available in-store.</Card.Text>
          <Button  href="/contact/"> Book appointment</Button>
        </Card.Body>
      </Card>
    </Col>

</Row>
        
      </div>
    </div>
  );
};

export default Contact;
