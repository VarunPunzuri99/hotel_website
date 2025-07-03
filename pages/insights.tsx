'use client';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import Layout from '../components/Layout';
import Head from 'next/head';

const Insights: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'New York, USA',
      rating: 5,
      text: 'Absolutely exceptional service! The staff went above and beyond to make our stay memorable. The room was immaculate, and the amenities exceeded our expectations.',
      avatar: 'https://picsum.photos/80/80?random=50'
    },
    {
      name: 'Michael Chen',
      location: 'London, UK',
      rating: 5,
      text: 'Business traveler here - this hotel is perfect for work stays. The business center is top-notch, and the location is ideal for meetings. Highly recommend!',
      avatar: 'https://picsum.photos/80/80?random=51'
    },
    {
      name: 'Emma Rodriguez',
      location: 'Barcelona, Spain',
      rating: 5,
      text: 'The spa services were incredible! Such a relaxing experience after a long day of sightseeing. The restaurant food was also outstanding.',
      avatar: 'https://picsum.photos/80/80?random=52'
    },
    {
      name: 'David Thompson',
      location: 'Sydney, Australia',
      rating: 5,
      text: 'Stayed here for our anniversary and it was perfect. The staff helped arrange a surprise dinner, and the attention to detail was remarkable.',
      avatar: 'https://picsum.photos/80/80?random=53'
    },
    {
      name: 'Priya Patel',
      location: 'Mumbai, India',
      rating: 5,
      text: 'Family-friendly hotel with excellent facilities. The kids loved the pool, and we appreciated the spacious rooms. Will definitely return!',
      avatar: 'https://picsum.photos/80/80?random=54'
    },
    {
      name: 'James Wilson',
      location: 'Toronto, Canada',
      rating: 5,
      text: 'The concierge service was outstanding. They helped us plan our entire itinerary and made restaurant reservations. Truly five-star service!',
      avatar: 'https://picsum.photos/80/80?random=55'
    }
  ];

  const insights = [
    {
      title: 'Sustainable Hospitality',
      description: 'Our commitment to environmental responsibility through eco-friendly practices and sustainable operations.',
      icon: 'bi bi-tree',
      color: 'success'
    },
    {
      title: 'Local Culture Integration',
      description: 'We showcase local art, cuisine, and traditions to provide guests with an authentic cultural experience.',
      icon: 'bi bi-globe',
      color: 'primary'
    },
    {
      title: 'Technology Innovation',
      description: 'Embracing cutting-edge technology to enhance guest experience and streamline operations.',
      icon: 'bi bi-cpu',
      color: 'info'
    },
    {
      title: 'Wellness Focus',
      description: 'Prioritizing guest wellness through our spa services, fitness facilities, and healthy dining options.',
      icon: 'bi bi-heart',
      color: 'danger'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i
        key={i}
        className={`bi ${i < rating ? 'bi-star-fill' : 'bi-star'}`}
        style={{ color: '#d69e2e' }}
      />
    ));
  };

  return (
    <Layout>
      <Head>
        <title>Insights - Sai Harsha Residency</title>
        <meta name="description" content="Read guest testimonials and discover insights about our hotel's commitment to excellence, sustainability, and guest satisfaction." />
      </Head>

      {/* Hero Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <div className={`${isVisible ? 'fade-in' : ''}`}>
                <h1 className="font-playfair mb-4">Guest Insights & Testimonials</h1>
                <p className="lead text-muted">
                  Discover what our guests are saying about their experiences and learn about 
                  our commitment to excellence in hospitality.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="font-playfair mb-3">What Our Guests Say</h2>
              <p className="text-muted">
                Real experiences from our valued guests
              </p>
            </Col>
          </Row>
          <Row>
            {testimonials.map((testimonial, index) => (
              <Col lg={4} md={6} key={index} className="mb-4">
                <Card className={`testimonial-card h-100 ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <Card.Body className="d-flex flex-column">
                    <div className="testimonial-rating mb-3">
                      {renderStars(testimonial.rating)}
                    </div>
                    <Card.Text className="flex-grow-1 mb-4">
                      "{testimonial.text}"
                    </Card.Text>
                    <div className="d-flex align-items-center">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="rounded-circle me-3"
                        style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                      />
                      <div>
                        <h6 className="mb-1">{testimonial.name}</h6>
                        <small className="text-muted">{testimonial.location}</small>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Insights Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="font-playfair mb-3">Our Hospitality Insights</h2>
              <p className="text-muted">
                Understanding what makes exceptional hospitality
              </p>
            </Col>
          </Row>
          <Row>
            {insights.map((insight, index) => (
              <Col lg={6} key={index} className="mb-4">
                <Card className={`service-card hover-lift h-100 ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: `${index * 0.15}s` }}>
                  <Card.Body>
                    <div className="d-flex align-items-center mb-3">
                      <div className={`service-icon me-3 text-${insight.color}`}>
                        <i className={insight.icon}></i>
                      </div>
                      <div>
                        <Card.Title className="mb-1">{insight.title}</Card.Title>
                        <Badge bg={insight.color} className="opacity-75">
                          Core Value
                        </Badge>
                      </div>
                    </div>
                    <Card.Text className="text-muted">
                      {insight.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Statistics Section */}
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="font-playfair mb-3">Our Achievements</h2>
              <p className="text-muted">
                Numbers that reflect our commitment to excellence
              </p>
            </Col>
          </Row>
          <Row className="text-center">
            <Col lg={3} md={6} className="mb-4">
              <div className={`${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.1s' }}>
                <h3 className="font-playfair" style={{ fontSize: '3rem', color: 'var(--secondary-color)' }}>
                  500+
                </h3>
                <p className="text-muted">Happy Guests</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className={`${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.2s' }}>
                <h3 className="font-playfair" style={{ fontSize: '3rem', color: 'var(--secondary-color)' }}>
                  4.9
                </h3>
                <p className="text-muted">Average Rating</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className={`${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.3s' }}>
                <h3 className="font-playfair" style={{ fontSize: '3rem', color: 'var(--secondary-color)' }}>
                  95%
                </h3>
                <p className="text-muted">Return Rate</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className={`${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.4s' }}>
                <h3 className="font-playfair" style={{ fontSize: '3rem', color: 'var(--secondary-color)' }}>
                  24/7
                </h3>
                <p className="text-muted">Support Available</p>
              </div>
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
                Be Part of Our Story
              </h2>
              <p className="text-white-50 mb-4 lead">
                Join our community of satisfied guests and create your own memorable experience 
                at Sai Harsha Residency.
              </p>
              <a 
                href="https://example-booking-site.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary-custom btn-lg"
              >
                Book Your Stay
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Insights;