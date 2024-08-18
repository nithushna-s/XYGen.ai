import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './css/Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer   py-4">
      <Container>
        <Row>
          <Col md={6}>
            <h5>XYGen.ai</h5>
            <p>Innovating the future with cutting-edge AI solutions.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <ul className="list-unstyled">
              <li><a href="/" >Home</a></li>
              <li><a href="/about" >About</a></li>
              <li><a href="/services" >Services</a></li>
              <li><a href="/contact" >Contact</a></li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p className="mb-0">&copy; 2024 XYGen.ai. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
