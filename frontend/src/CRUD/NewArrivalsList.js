import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";

const NewArrivalsList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("http://localhost:5000/allNewItems/")
        .then((res) => {
          setItems(res.data);
          console.log(res);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);

  // Group items into chunks for the carousel
  const chunkItems = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const groupedItems = chunkItems(items, 4); // Group items into chunks of 4

  return (
    <Container>
      <Carousel>
        {groupedItems.map((group, index) => (
          <Carousel.Item key={index}>
            <Row className="g-2">
              {group.map((item) => (
                <Col xs={6} md={6} lg={3} key={item._id}>
                  <Card className="img-fluid store-card">
                    <Card.Img
                      variant="top"
                      src={`http://localhost:5000/images/${item.photo}`}
                      className="store-img"
                    />
                    <Card.Body>
                      <Card.Title className="font1">{item.title}</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default NewArrivalsList;
