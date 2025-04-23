import React from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormControl } from "react-bootstrap";

const NavigationBar = () => {
    const navigate = useNavigate();
  return (
    <div>
      <div className="scrolling-wrapper">
        <div className="scrolling-content fw-bold fs-6 ">
          Get up to 50% off to the selected items — Get up to 50% off to the
          selected items — Get up to 50% off to the selected items —
        </div>
      </div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/about/">About</Nav.Link>
              <Nav.Link href="/contact/">Contact</Nav.Link>
              <NavDropdown title="Collections" id="basic-nav-dropdown"  onClick={() => navigate('/collections/')}>
                <NavDropdown.Item href="/bracelets/">Bracelets</NavDropdown.Item>
                <NavDropdown.Item href="/necklaces/">
                  Necklaces
                </NavDropdown.Item>
                <NavDropdown.Item href="/rings/">
                  Rings
                </NavDropdown.Item>
                <NavDropdown.Item href="earrings">
                 Earrings
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search item"
            aria-label="search"
            className="me-2"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
