import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBest = () => {
    const [item, setItem] = useState({
        title: "",
        photo: "",
      });
      const navigate = useNavigate();
    
      const [uploadedImage, setUploadedImage] = useState(null);
      const handleChange = (e) => {
        setItem({ ...item, [e.target.name]: e.target.value });
      };
      const handlePhoto = (e) => {
        setItem({ ...item, photo: e.target.files[0] });
        setUploadedImage(URL.createObjectURL(e.target.files[0]));
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.entries(item).forEach(([key, value]) => {
          formData.append(key, value);
        });
        await axios
          .post("http://localhost:5000/addItem", formData)
          .then((res) => console.log(res))
          .catch((err) => console.log("Data not added.", err));
        navigate("/bestlist");
        // ############################
      };
      const [items, setItems] = useState([]);
      useEffect(() => {
        const fetchData = async () => {
          await axios
            .get("http://localhost:5000/allItems/")
            .then((res) => {
              setItems(res.data);
              console.log(res);
            })
            .catch((err) => console.log(err));
        };
        fetchData();
      }, []);
  return( 
    <>
    <Container>
      <h1>Create item</h1>
      <Form onSubmit={handleSubmit} encType="multipart/form-data">
        <Form.Group className="mb-3" controlId="title">
          <Form.Label >Title</Form.Label>
          <Form.Control
           
            type="text"
            value={item.title}
            name="title"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="photo">
          <Form.Label>Photo</Form.Label>
          <Form.Control
            type="file"
            onChange={handlePhoto}
            name="photo"
            accept=".jpg, .png, .jpeg, .webp"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add product
        </Button>
      </Form>
      <img src={uploadedImage} alt={item.title} className="img-fluid" />
    </Container>
    <Container>
      
      <Row>
        {items.map((item) => {
          return (
            <Col xs={12} md={6} lg={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src={`http://localhost:5000/images/${item.photo}`}
                />
                <Card.Body>
                  <Card.Title  className="title">{item.title}</Card.Title>
                  <Button variant="primary" href={`/readOne/${item._id}`}>
                    More options
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  </>

  );
};

export default CreateBest;
