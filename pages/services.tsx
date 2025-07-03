'use client';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Layout from '../components/Layout';
import Head from 'next/head';

const Services: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: 'bi bi-wifi',
      title: 'Free Wi-Fi',
      description: 'High-speed internet access throughout the property for seamless connectivity.'
    },
    {
      icon: 'bi bi-thermometer-sun',
      title: 'Climate Control',
      description: 'Individual air conditioning and heating systems in all rooms for optimal comfort.'
    },
    {
      icon: 'bi bi-car-front',
      title: 'Valet Parking',
      description: 'Secure parking facilities with professional valet service for your convenience.'
    },
    {
      icon: 'bi bi-person-workspace',
      title: 'Business Center',
      description: 'Fully equipped business facilities including meeting rooms and presentation equipment.'
    },
    {
      icon: 'bi bi-water',
      title: 'Swimming Pool',
      description: 'Outdoor swimming pool and sundeck area for relaxation and recreation.'
    },
    {
      icon: 'bi bi-dumbbell',
      title: 'Fitness Center',
      description: 'Modern fitness facility with latest equipment and personal training services.'
    },
    {
      icon: 'bi bi-cup-hot',
      title: 'Restaurant & Bar',
      description: 'Fine dining restaurant and lounge bar serving local and international cuisine.'
    },
    {
      icon: 'bi bi-shield-check',
      title: '24/7 Security',
      description: 'Round-the-clock security and surveillance for your safety and peace of mind.'
    },
    {
      icon: 'bi bi-telephone',
      title: 'Room Service',
      description: '24-hour room service for all your dining and convenience needs.'
    },
    {
      icon: 'bi bi-suit-heart',
      title: 'Spa & Wellness',
      description: 'Rejuvenating spa services and wellness treatments for complete relaxation.'
    },
    {
      icon: 'bi bi-people',
      title: 'Concierge Service',
      description: 'Personal concierge to assist with bookings, tours, and local recommendations.'
    },
    {
      icon: 'bi bi-airplane',
      title: 'Airport Shuttle',
      description: 'Complimentary shuttle service to and from the airport for hotel guests.'
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Services - Sai Harsha Residency</title>
        <meta name="description" content="Discover our comprehensive range of hotel services and amenities designed to make your stay comfortable and memorable." />
      </Head>

      {/* Hero Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <div className={`${isVisible ? 'fade-in' : ''}`}>
                <h1 className="font-playfair mb-4">Our Services & Amenities</h1>
                <p className="lead text-muted">
                  Discover the comprehensive range of services and amenities designed to enhance 
                  your stay and provide the ultimate comfort and convenience.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-5">
        <Container>
          <Row>
            {services.map((service, index) => (
              <Col lg={4} md={6} key={index} className="mb-4">
                <Card className={`service-card hover-lift h-100 ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <Card.Body className="d-flex flex-column">
                    <div className="service-icon mb-3">
                      <i className={service.icon}></i>
                    </div>
                    <Card.Title className="h5 mb-3">{service.title}</Card.Title>
                    <Card.Text className="text-muted flex-grow-1">
                      {service.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Additional Services Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="font-playfair mb-3">Premium Services</h2>
              <p className="lead text-muted">
                Exclusive services for an elevated experience
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-4">
              <Card className="service-card hover-lift h-100">
                <Row className="g-0">
                  <Col md={4}>
                    <img
                      src="https://picsum.photos/300/200?random=10"
                      alt="Event Hosting"
                      className="img-fluid rounded-start h-100"
                      style={{ objectFit: 'cover' }}
                    />
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <Card.Title>Event Hosting</Card.Title>
                      <Card.Text>
                        Professional event planning and hosting services for conferences, 
                        weddings, and special occasions with dedicated event coordinators.
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="service-card hover-lift h-100">
                <Row className="g-0">
                  <Col md={4}>
                    <img
                      src="https://picsum.photos/300/200?random=11"
                      alt="Executive Lounge"
                      className="img-fluid rounded-start h-100"
                      style={{ objectFit: 'cover' }}
                    />
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <Card.Title>Executive Lounge</Card.Title>
                      <Card.Text>
                        Exclusive lounge access for business travelers with complimentary 
                        refreshments, business services, and private meeting spaces.
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Services;