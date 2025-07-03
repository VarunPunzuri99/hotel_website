import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5 className="font-playfair">Sai Harsha Residency</h5>
            <p className="mb-3">
              Experience luxury and comfort at our premium hotel. We provide exceptional service 
              and world-class amenities for an unforgettable stay.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white-50 text-decoration-none">Home</a></li>
              <li><a href="/services" className="text-white-50 text-decoration-none">Services</a></li>
              <li><a href="/gallery" className="text-white-50 text-decoration-none">Gallery</a></li>
              <li><a href="/insights" className="text-white-50 text-decoration-none">Insights</a></li>
              <li><a href="/contact" className="text-white-50 text-decoration-none">Contact</a></li>
            </ul>
          </Col>
          <Col md={4} className="mb-4">
            <h5>Contact Info</h5>
            <p className="mb-2">
              <i className="bi bi-geo-alt-fill me-2"></i>
              123 Hotel Street, City Center, State 12345
            </p>
            <p className="mb-2">
              <i className="bi bi-telephone-fill me-2"></i>
              +1 (555) 123-4567
            </p>
            <p className="mb-2">
              <i className="bi bi-envelope-fill me-2"></i>
              info@saiharsha.com
            </p>
          </Col>
        </Row>
        <hr className="my-4" />
        <Row>
          <Col className="text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Sai Harsha Residency. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;