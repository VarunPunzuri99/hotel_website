'use client';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import Layout from '../components/Layout';
import Head from 'next/head';

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleExploreMore = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <Layout>
      <Head>
        <title>Sai Harsha Residency - Premium Hotel Experience</title>
        <meta name="description" content="Experience luxury and comfort at Sai Harsha Residency. Premium hotel with world-class amenities and exceptional service." />
      </Head>

      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10} className="text-center">
              <div className={`hero-content ${isVisible ? 'fade-in' : ''}`}>
                <h1 className="hero-title font-playfair">
                  Welcome to Sai Harsha Residency
                </h1>
                <p className="hero-subtitle">
                  Experience Luxury, Comfort, and Exceptional Service
                </p>
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <Button
                    size="lg"
                    className="btn-primary-custom"
                    onClick={() => window.open('https://example-booking-site.com', '_blank')}
                  >
                    Book Your Stay
                  </Button>
                  <Button
                    size="lg"
                    className="btn-secondary-custom"
                    onClick={handleExploreMore}
                  >
                    Explore More
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="slide-in-left">
                <h2 className="font-playfair mb-4">Your Home Away From Home</h2>
                <p className="lead mb-4">
                  At Sai Harsha Residency, we believe that every guest deserves an exceptional experience. 
                  Our commitment to luxury, comfort, and personalized service sets us apart as the premier 
                  destination for travelers seeking the finest accommodations.
                </p>
                <p className="text-muted">
                  Whether you're here for business or leisure, our dedicated team ensures that every moment 
                  of your stay is memorable. From our elegantly appointed rooms to our world-class amenities, 
                  we create an atmosphere where you can relax, rejuvenate, and create lasting memories.
                </p>
                <Button 
                  className="btn-primary-custom mt-3"
                  href="/services"
                >
                  Discover Our Services
                </Button>
              </div>
            </Col>
            <Col lg={6}>
              <div className="slide-in-right">
                <img
                  src="https://picsum.photos/600/400?random=2"
                  alt="Hotel Lobby"
                  className="img-fluid rounded shadow-lg hover-scale"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="font-playfair mb-3">Why Choose Sai Harsha Residency?</h2>
              <p className="lead text-muted">
                Experience the perfect blend of luxury, comfort, and exceptional service
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="service-card hover-lift">
                <Card.Body>
                  <div className="service-icon">
                    <i className="bi bi-award"></i>
                  </div>
                  <Card.Title>Premium Quality</Card.Title>
                  <Card.Text>
                    Experience the finest in hospitality with our premium accommodations 
                    and attention to detail in every aspect of your stay.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="service-card hover-lift">
                <Card.Body>
                  <div className="service-icon">
                    <i className="bi bi-people"></i>
                  </div>
                  <Card.Title>Exceptional Service</Card.Title>
                  <Card.Text>
                    Our dedicated team of professionals is committed to providing 
                    personalized service that exceeds your expectations.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="service-card hover-lift">
                <Card.Body>
                  <div className="service-icon">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <Card.Title>Prime Location</Card.Title>
                  <Card.Text>
                    Strategically located in the heart of the city, providing easy access 
                    to major attractions, business districts, and transportation hubs.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5" style={{ background: 'linear-gradient(135deg, #1a365d, #2a5a87)' }}>
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="font-playfair text-white mb-4">
                Ready to Experience Luxury?
              </h2>
              <p className="text-white-50 mb-4 lead">
                Book your stay today and discover why Sai Harsha Residency is the preferred choice 
                for discerning travelers seeking exceptional accommodations and service.
              </p>
              <Button
                size="lg"
                className="btn-secondary-custom"
                onClick={() => window.open('https://example-booking-site.com', '_blank')}
              >
                Book Now
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Home;