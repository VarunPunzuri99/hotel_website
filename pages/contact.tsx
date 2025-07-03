'use client';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import Layout from '../components/Layout';
import Head from 'next/head';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    console.log('Form submitted:', formData);
    setShowAlert(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setTimeout(() => setShowAlert(false), 5000);
  };

  const contactInfo = [
    {
      icon: 'bi bi-geo-alt-fill',
      title: 'Address',
      details: ['123 Hotel Street', 'City Center, State 12345', 'United States']
    },
    {
      icon: 'bi bi-telephone-fill',
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 123-4568']
    },
    {
      icon: 'bi bi-envelope-fill',
      title: 'Email',
      details: ['info@saiharsha.com', 'reservations@saiharsha.com']
    },
    {
      icon: 'bi bi-clock-fill',
      title: 'Hours',
      details: ['Front Desk: 24/7', 'Concierge: 6 AM - 10 PM']
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Contact - Sai Harsha Residency</title>
        <meta name="description" content="Get in touch with Sai Harsha Residency. Contact information, location, and inquiry form for reservations and general questions." />
      </Head>

      {/* Hero Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <div className={`${isVisible ? 'fade-in' : ''}`}>
                <h1 className="font-playfair mb-4">Contact Us</h1>
                <p className="lead text-muted">
                  We're here to help you plan your perfect stay. Get in touch with our team 
                  for reservations, inquiries, or any assistance you may need.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Information */}
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="font-playfair mb-3">Get in Touch</h2>
              <p className="text-muted">
                Multiple ways to reach us for your convenience
              </p>
            </Col>
          </Row>
          <Row>
            {contactInfo.map((info, index) => (
              <Col lg={3} md={6} key={index} className="mb-4">
                <Card className={`service-card hover-lift h-100 text-center ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <Card.Body>
                    <div className="service-icon mb-3">
                      <i className={info.icon}></i>
                    </div>
                    <Card.Title className="h5 mb-3">{info.title}</Card.Title>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted mb-1">
                        {detail}
                      </p>
                    ))}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Contact Form and Map */}
      <section className="py-5 bg-light">
        <Container>
          <Row>
            <Col lg={6} className="mb-4">
              <Card className="contact-form h-100">
                <Card.Body>
                  <h3 className="font-playfair mb-4">Send us a Message</h3>
                  {showAlert && (
                    <Alert variant="success" dismissible onClose={() => setShowAlert(false)}>
                      Thank you for your message! We'll get back to you soon.
                    </Alert>
                  )}
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>Name *</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Your full name"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>Email *</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="your.email@example.com"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>Phone</Form.Label>
                          <Form.Control
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="(555) 123-4567"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>Subject *</Form.Label>
                          <Form.Control
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            placeholder="Subject of your inquiry"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group className="mb-4">
                      <Form.Label>Message *</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder="Tell us how we can help you..."
                      />
                    </Form.Group>
                    <Button type="submit" className="btn-primary-custom w-100">
                      Send Message
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6}>
              <Card className="h-100">
                <Card.Body className="p-0">
                  <h3 className="font-playfair mb-4 px-4 pt-4">Find Us</h3>
                  <div className="px-4 pb-3">
                    <p className="text-muted mb-3">
                      Located in the heart of the city, we're easily accessible by all modes of transportation.
                    </p>
                  </div>
                  {/* Map Placeholder */}
                  <div 
                    className="bg-light d-flex align-items-center justify-content-center"
                    style={{ 
                      height: '300px',
                      backgroundImage: 'url(https://picsum.photos/600/300?random=100)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="text-center bg-white bg-opacity-90 p-4 rounded">
                      <i className="bi bi-geo-alt-fill text-primary" style={{ fontSize: '3rem' }}></i>
                      <p className="mb-0 mt-2 text-muted">Interactive Map</p>
                      <small className="text-muted">Click to view in Google Maps</small>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Social Media and Additional Info */}
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="font-playfair mb-3">Connect With Us</h2>
              <p className="text-muted">
                Follow us on social media for updates and special offers
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="d-flex justify-content-center gap-4 mb-4">
                <a href="#" className="text-primary" style={{ fontSize: '2rem' }}>
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="text-info" style={{ fontSize: '2rem' }}>
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="text-danger" style={{ fontSize: '2rem' }}>
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="text-primary" style={{ fontSize: '2rem' }}>
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="#" className="text-success" style={{ fontSize: '2rem' }}>
                  <i className="bi bi-whatsapp"></i>
                </a>
              </div>
              <div className="row">
                <Col md={4} className="text-center mb-3">
                  <h5 className="font-playfair">Emergency Contact</h5>
                  <p className="text-muted mb-0">+1 (555) 911-0000</p>
                  <small className="text-muted">Available 24/7</small>
                </Col>
                <Col md={4} className="text-center mb-3">
                  <h5 className="font-playfair">Reservation Hotline</h5>
                  <p className="text-muted mb-0">+1 (555) 123-BOOK</p>
                  <small className="text-muted">7 AM - 11 PM</small>
                </Col>
                <Col md={4} className="text-center mb-3">
                  <h5 className="font-playfair">Guest Services</h5>
                  <p className="text-muted mb-0">+1 (555) 123-HELP</p>
                  <small className="text-muted">24/7 Support</small>
                </Col>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Contact;