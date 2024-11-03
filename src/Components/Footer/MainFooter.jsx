import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const MainFooter = () => {
  return (
    <footer className="footer bg-light text-center text-md-start py-4">
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <h6>About Us</h6>
            <p className="small">
              Dedicated to providing a platform for collaborative learning and sharing.
            </p>
          </Col>
          <Col md={4} className="mb-3">
            <h6>Quick Links</h6>
            <ul className="list-unstyled small">
              <li><a href="/" className="text-dark text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-dark text-decoration-none">About</a></li>
              <li><a href="/contact" className="text-dark text-decoration-none">Contact</a></li>
            </ul>
          </Col>
          <Col md={4} className="mb-3">
            <h6>Contact Us</h6>
            <p className="small mb-1">Email: support@example.com</p>
            <p className="small">Phone: +123 456 7890</p>
          </Col>
        </Row>
        <hr className="my-3" />
        <Row>
          <Col className="text-center small">
            &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MainFooter;
