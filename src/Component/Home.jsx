import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './Home.css';
import About from './About';

const Home = () => {
  return (
    
    <>
      <section id="home" className="home-section d-flex align-items-center">
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={10} lg={8}>
              <h1 className="display-4">Welcome to XYGen.ai</h1>
              <p className="lead">
                Innovating the future with cutting-edge AI solutions and advanced technology. Our mission is to transform businesses with intelligent systems that drive efficiency and growth.
              </p>
              <Button variant="primary" size="lg" href="/services">Explore Our Services</Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Company Overview Section */}
      <section id="company-overview" className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={10} lg={8}>
              <h2 className="display-5">Who We Are</h2>
              <p className="lead">
                XYGen.ai is at the forefront of AI innovation. We specialize in providing bespoke AI solutions that empower businesses to achieve new heights. Our team of experts is dedicated to delivering technology that drives progress and success.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Key Services Section */}
      <section id="key-services" className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={10} lg={8}>
              <h2 className="display-5">Our Key Services</h2>
              <p className="lead">
                Discover the range of AI services we offer to meet your business needs.
              </p>

            </Col>
          </Row>
          <Row className="justify-content-center align-items-center text-center">
            <Col md={6} lg={4} className="mb-4">
              <Card className="service-card shadow-sm">
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
            <Col md={6} lg={4} className="mb-4">
              <Card className="service-card shadow-sm">
                <Card.Body>
                  <Card.Title>Data Analytics</Card.Title>
                  <Card.Text>
                    Leverage our AI-powered analytics to turn your data into actionable insights. We help you make informed decisions and stay ahead of the curve.
                  </Card.Text>
                  <Link to="/contact">
                  <button className="button-primary"  >Contact Us</button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section id="call-to-action" className="py-5 text-center bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <div className="scrolling-content">
                <h2 className="display-5">Ready to Transform Your Business?</h2>
                <p className="lead">Contact us today to start your AI journey.</p>
                <Link to="/contact">
                  <button className='bt' size="lg">Get in Touch</button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <About />
    </>
  );
}

export default Home;
