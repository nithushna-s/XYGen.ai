import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import missionVisionImg from './IMAGE/about.jpg';
import teamMember1Img from './IMAGE/team1.webp';
import teamMember2Img from './IMAGE/team2.webp';
import teamMember3Img from './IMAGE/team3.jpg';
import './css/About.css';

const About = () => {
  return (
    <section id="about" className="about-section py-5">
      <Container>
        <Row className="mb-5">
          <Col>
            <h2 className="text-center">About Us</h2>
            <p className="text-center text-muted">
              Learn more about our mission, vision, and the team that drives our success.
            </p>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={6}>
            <h3>Our Mission</h3>
            <p>
              At XYGen.ai, our mission is to leverage artificial intelligence to create innovative solutions that empower businesses to thrive in the digital age. We are committed to driving progress and efficiency through cutting-edge technology.
            </p>
            <h3>Our Vision</h3>
            <p>
              Our vision is to be a global leader in AI-driven solutions, transforming industries and improving lives through intelligent automation and data-driven insights.
            </p>
          </Col>
          <Col md={6}>
            <img
              src={missionVisionImg}
              alt="Mission and Vision"
              className="img-fluid rounded"
            />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <h3 style={{textAlign:'center', paddingBottom:'5%'}}>Our Team</h3>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="mb-4 team-card">
            <Card>
              <Card.Img variant="top" src={teamMember1Img} />
              <Card.Body>
                <Card.Title>John Doe</Card.Title>
                <Card.Text>CEO & Founder</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4 team-card">
            <Card>
              <Card.Img variant="top" src={teamMember2Img} />
              <Card.Body>
                <Card.Title>Jane Smith</Card.Title>
                <Card.Text>Chief Technology Officer</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4 team-card">
            <Card>
              <Card.Img variant="top" src={teamMember3Img} />
              <Card.Body>
                <Card.Title>Michael Brown</Card.Title>
                <Card.Text>Lead AI Engineer</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
