import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="font1 py-4 mt-5">
      <hr className="border-dark" />
      <Container>
        <Row>
          <Col md={3}>
            <h5>JewelIn</h5>
            <ul className="list-unstyled">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet lobortis mi. Mauris enim ante, tempor semper rhoncus eget,
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/about/" className=" text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/collections/"
                  className="text-decoration-none"
                >
                  Collections
                </a>
              </li>
              <li>
                <a href="/contact/" className=" text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#faq" className="text-decoration-none">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#privacy" className=" text-decoration-none">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-decoration-none">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#facebook" className="text-decoration-none">
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#instagram"
                  className="text-decoration-none"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a href="#twitter" className=" text-decoration-none">
                  Twitter
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <hr className="border-dark" />
        <div className="text-center">
          <p className="mb-0">
            &copy; {new Date().getFullYear()}JewelIn. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
