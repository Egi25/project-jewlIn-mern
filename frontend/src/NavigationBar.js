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
      <Navbar expand="lg" >
        <Container>
          <Navbar.Brand href="/" className="font1 fs-3 ms-3 mb-0">JewelIn</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav" >
              <Nav.Link href="/about/"className="nav">ABOUT</Nav.Link>
              <Nav.Link href="/contact/" className="nav">CONTACT</Nav.Link>
              <NavDropdown  title="COLLECTIONS" id="basic-nav-dropdown"  onClick={() => navigate('/collections/')}>
                <NavDropdown.Item href="/bracelets/">BRACELETS</NavDropdown.Item>
                <NavDropdown.Item href="/necklaces/">
                  NECKLACES
                </NavDropdown.Item>
                <NavDropdown.Item href="/rings/">
                  RINGS
                </NavDropdown.Item>
                <NavDropdown.Item href="earrings">
                 EARRINGS
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
          <Button className="button-style">Search</Button>
        </Form>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
