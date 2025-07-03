'use client';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Carousel, Modal } from 'react-bootstrap';
import Layout from '../components/Layout';
import Head from 'next/head';

const Gallery: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const carouselImages = [
    {
      src: 'https://picsum.photos/800/500?random=20',
      caption: 'Elegant Hotel Lobby',
      description: 'Our sophisticated lobby welcomes guests with luxury and style.'
    },
    {
      src: 'https://picsum.photos/800/500?random=21',
      caption: 'Premium Guest Room',
      description: 'Spacious rooms designed for comfort and relaxation.'
    },
    {
      src: 'https://picsum.photos/800/500?random=22',
      caption: 'Fine Dining Restaurant',
      description: 'Exquisite dining experience with international cuisine.'
    },
    {
      src: 'https://picsum.photos/800/500?random=23',
      caption: 'Outdoor Swimming Pool',
      description: 'Refreshing pool area with beautiful city views.'
    },
    {
      src: 'https://picsum.photos/800/500?random=24',
      caption: 'Spa & Wellness Center',
      description: 'Rejuvenating spa treatments for ultimate relaxation.'
    }
  ];

  const galleryImages = [
    'https://picsum.photos/400/300?random=30',
    'https://picsum.photos/400/300?random=31',
    'https://picsum.photos/400/300?random=32',
    'https://picsum.photos/400/300?random=33',
    'https://picsum.photos/400/300?random=34',
    'https://picsum.photos/400/300?random=35',
    'https://picsum.photos/400/300?random=36',
    'https://picsum.photos/400/300?random=37',
    'https://picsum.photos/400/300?random=38',
    'https://picsum.photos/400/300?random=39',
    'https://picsum.photos/400/300?random=40',
    'https://picsum.photos/400/300?random=41'
  ];

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setShowModal(true);
  };

  return (
    <Layout>
      <Head>
        <title>Gallery - Sai Harsha Residency</title>
        <meta name="description" content="Explore our beautiful hotel facilities, rooms, and amenities through our comprehensive photo gallery." />
      </Head>

      {/* Hero Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <div className={`${isVisible ? 'fade-in' : ''}`}>
                <h1 className="font-playfair mb-4">Photo Gallery</h1>
                <p className="lead text-muted">
                  Take a visual journey through our elegant spaces and discover the beauty 
                  and comfort that awaits you at Sai Harsha Residency.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured Carousel */}
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="font-playfair mb-3">Featured Views</h2>
              <p className="text-muted">
                Highlights of our premium facilities and accommodations
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={10}>
              <Carousel className="shadow-lg rounded" indicators controls fade>
                {carouselImages.map((image, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={image.src}
                      alt={image.caption}
                      style={{ height: '500px', objectFit: 'cover' }}
                    />
                    <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3">
                      <h3 className="font-playfair">{image.caption}</h3>
                      <p>{image.description}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Gallery Grid */}
      <section className="py-5 bg-light">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="font-playfair mb-3">Complete Gallery</h2>
              <p className="text-muted">
                Browse through our collection of images showcasing every aspect of our hotel
              </p>
            </Col>
          </Row>
          <Row>
            {galleryImages.map((image, index) => (
              <Col lg={3} md={4} sm={6} key={index} className="mb-4">
                <div 
                  className={`gallery-item ${isVisible ? 'fade-in' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => handleImageClick(image)}
                >
                  <img
                    src={image}
                    alt={`Gallery Image ${index + 1}`}
                    className="img-fluid"
                  />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Image Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
        <Modal.Body className="p-0">
          <img
            src={selectedImage}
            alt="Gallery Image"
            className="img-fluid w-100"
          />
        </Modal.Body>
      </Modal>

      {/* Virtual Tour CTA */}
      <section className="py-5" style={{ background: 'linear-gradient(135deg, #1a365d, #2a5a87)' }}>
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="font-playfair text-white mb-4">
                Want to See More?
              </h2>
              <p className="text-white-50 mb-4 lead">
                Schedule a virtual tour or visit us in person to experience the full beauty 
                and luxury of Sai Harsha Residency.
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <a 
                  href="/contact" 
                  className="btn btn-secondary-custom"
                >
                  Contact Us
                </a>
                <a 
                  href="https://example-booking-site.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline-light"
                >
                  Book a Tour
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Gallery;