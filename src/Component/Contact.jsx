import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import './css/Contact.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });

    // Reset errors when the user starts typing
    if (errors[id]) {
      setErrors({ ...errors, [id]: null });
    }
  };

  const handleBlur = (e) => {
    const { id } = e.target;
    setTouched({ ...touched, [id]: true });

    // Validate field on blur
    validateField(id, formData[id]);
  };

  const validateField = (field, value) => {
    let error = null;

    if (field === 'name') {
      const nameRegex = /^[A-Za-z\s]+$/;
      if (!value.trim()) {
        error = 'Name is required.';
      } else if (!nameRegex.test(value)) {
        error = 'Name can only contain letters and spaces.';
      }
    } else if (field === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) {
        error = 'Email is required.';
      } else if (!emailRegex.test(value)) {
        error = 'Invalid email address.';
      }
    } else if (field === 'message' && !value.trim()) {
      error = 'Message is required.';
    }

    setErrors({ ...errors, [field]: error });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields before submission
    validateField('name', formData.name);
    validateField('email', formData.email);
    validateField('message', formData.message);

    if (!Object.values(errors).some(Boolean)) {
      // No errors, submit the form
      console.log('Form submitted:', formData);
    }
  };

  const getFieldClassName = (field) => {
    if (touched[field]) {
      return errors[field] ? 'is-invalid' : 'is-valid';
    }
    return '';
  };

  return (
    <section id="contact" className="contact-section py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={5} className="mb-4">
            <div className="contact-info">
              <h4>Contact Information</h4>
              <p><FaMapMarkerAlt className="icon" /> 123 AI Street, Tech City, TX 75001</p>
              <p><FaEnvelope className="icon" /> contact@xygen.ai</p>
              <p><FaPhone className="icon" /> (123) 456-7890</p>
            </div>
          </Col>
          <Col md={7}>
            <Form className="form-container" onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={getFieldClassName('name')}
                    />
                    {errors.name && (
                      <div className="invalid-feedback">{errors.name}</div>
                    )}
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="email" className="mt-3 mt-md-0">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={getFieldClassName('email')}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="message" className="mt-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={getFieldClassName('message')}
                />
                {errors.message && (
                  <div className="invalid-feedback">{errors.message}</div>
                )}
              </Form.Group>
              <button type="submit" className="mt-4 button-primary">
                Submit
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;
