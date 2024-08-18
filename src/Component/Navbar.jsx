import React from 'react';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const CustomNavbar = () => {
  return (
    <div style={{ marginBottom: '1%' }}>
      <Navbar 
        expand="lg" 
        fixed="top" 
        style={{ 
          fontFamily: 'Lora', 
          backgroundColor: '#2e434e'
        }}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" style={{ fontFamily: 'Lora', color: '#ffffff' }}>
            XYGen.ai
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-light' />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" style={{ fontFamily: 'Lora', color: '#ffffff' }}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" style={{ fontFamily: 'Lora', color: '#ffffff' }}>
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/services" style={{ fontFamily: 'Lora', color: '#ffffff' }}>
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" style={{ fontFamily: 'Lora', color: '#ffffff' }}>
                Contact
              </Nav.Link>
              <Dropdown align="end">
                <Dropdown.Toggle 
                  variant="link" 
                  id="dropdown-basic" 
                  style={{ color: '#ffffff',marginTop:'0.4rem', padding: 0, marginLeft: '1rem' }}
                >
                  <FontAwesomeIcon icon={faUser} size="lg" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/profile">View Profile</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/settings">Settings</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item as={Link} to="/logout">Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="content">
        
      </div>
    </div>
  );
};

export default CustomNavbar;
