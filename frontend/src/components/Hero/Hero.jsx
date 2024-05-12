import React from 'react';
import Camera1 from "../../images/Camera1.png";
import { Container, Row, Col, Button } from 'react-bootstrap';
import "./Hero.css"

const HeroSection = () => {
  return (
    <Container fluid className="hero-section" style={{ color: 'white',  }}>
      <Row>
        <Col md={6} className="text-section">
          <h1 className='principal'>Capturing Moments</h1>
          <p className='principal-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <Button variant="outline-light" className='view'>View Projects</Button>
        </Col>
        <Col md={6} className="image-section">
          <img src={Camera1} alt="Camera" className="camera-image" />
        </Col>
      </Row>
    </Container>
    
  );
};

export default HeroSection;