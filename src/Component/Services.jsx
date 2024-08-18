import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card} from 'react-bootstrap';
import './css/Service.css';

const Services = () => {
  return (
    <section id="services" className="py-5" >
      <Container>
        <Row className="justify-content-center text-center mb-4">
          <Col md={8}>
            <h2 className="display-5 mt-4">Our Services</h2>
            <p className="lead">We offer a range of AI-based solutions to help your business grow.</p>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Card className="service-card mb-5">
              <Card.Body>
                <Card.Title>AI Consulting</Card.Title>
                <Card.Text>
                  Receive expert guidance on integrating AI into your business. We assess your needs and create a tailored strategy for successful AI adoption.
                </Card.Text>
                <Link to="/contact">
                  <button className="button-primary"  >Contact Us</button>
                  </Link>              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="service-card mb-4">
              <Card.Body>
                <Card.Title>Custom AI Solutions</Card.Title>
                <Card.Text>
                  We build custom AI solutions to meet your specific needs, ensuring seamless integration with your existing systems for optimal results.
                </Card.Text>
                <Link to="/contact">
                  <button className="button-primary"  >Contact Us</button>
                  </Link>
                                </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="service-card mb-4">
              <Card.Body>
                <Card.Title>Data Analytics</Card.Title>
                <Card.Text>
                  Leverage our AI-powered analytics to turn your data into actionable insights. We help you make informed decisions and stay ahead of the curve.
                </Card.Text>
                <Link to="/contact">
                  <button className="button-primary"  >Contact Us</button>
                  </Link>              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Services;
