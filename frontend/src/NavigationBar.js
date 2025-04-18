import React from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button, Form, FormControl } from "react-bootstrap";

const NavigationBar = () => {
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
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
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
