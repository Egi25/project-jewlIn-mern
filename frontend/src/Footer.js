import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><a href="#about" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="#services" className="text-light text-decoration-none">Services</a></li>
              <li><a href="#contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li><a href="#faq" className="text-light text-decoration-none">FAQ</a></li>
              <li><a href="#privacy" className="text-light text-decoration-none">Privacy Policy</a></li>
              <li><a href="#terms" className="text-light text-decoration-none">Terms & Conditions</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="#facebook" className="text-light text-decoration-none">Facebook</a></li>
              <li><a href="#instagram" className="text-light text-decoration-none">Instagram</a></li>
              <li><a href="#twitter" className="text-light text-decoration-none">Twitter</a></li>
            </ul>
          </Col>
        </Row>
        <hr className="border-light" />
        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;