import React, { ReactNode } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();

  const handleBookNow = () => {
    // In a real application, this would redirect to a booking system
    window.open('https://example-booking-site.com', '_blank');
  };

  return (
    <>
      <Navbar expand="lg" className="navbar-light bg-white shadow-sm fixed-top">
        <Container>
          <Navbar.Brand as={Link} href="/" className="font-playfair">
            Sai Harsha Residency
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link as={Link} href="/" className={router.pathname === '/' ? 'active' : ''}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} href="/services" className={router.pathname === '/services' ? 'active' : ''}>
                Services
              </Nav.Link>
              <Nav.Link as={Link} href="/gallery" className={router.pathname === '/gallery' ? 'active' : ''}>
                Gallery
              </Nav.Link>
              <Nav.Link as={Link} href="/insights" className={router.pathname === '/insights' ? 'active' : ''}>
                Insights
              </Nav.Link>
              <Nav.Link as={Link} href="/contact" className={router.pathname === '/contact' ? 'active' : ''}>
                Contact
              </Nav.Link>
              <Button
                className="btn-primary-custom ms-3"
                onClick={handleBookNow}
              >
                Book Now
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main style={{ paddingTop: '76px' }}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;