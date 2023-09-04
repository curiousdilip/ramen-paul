"use client"
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import classnames from 'classnames';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';


const RHeader = () => {
    const router = useRouter();
    const [activePath, setActivePath] = useState('/');
    const [scrolled, setScrolled] = useState(false);
    const [showBackToTop, setShowBackToTop] = useState(false);

    const handleScroll = () => {
        setScrolled(window.scrollY > 10);
        setShowBackToTop(window.scrollY > 200);
    };

    const handleBackToTopClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    useEffect(() => {
        const handleRouteChange = (url) => {
            setActivePath(url);
        };

        if (router?.events) {
            router.events.on('routeChangeComplete', handleRouteChange);
            return () => {
                router.events.off('routeChangeComplete', handleRouteChange);
            };
        }
    }, [router]);

    const scroll = classnames({
        'scrolled': scrolled,
    })

    return (
        <div className="pageHeader">
            <div className={scroll}>
                <Navbar className="navbar fixed-top" expand="lg">
                    <Container>
                        <Navbar.Brand href="/">
                            <h2>Ramen Paul</h2>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" >   <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg></Navbar.Toggle>

                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link href="/about" className={activePath === '/about' ? 'active' : ''}>About</Nav.Link>

                                <NavDropdown title="Gallery" id="gallery">
                                    <NavDropdown.Item href="/videos">Videos</NavDropdown.Item>
                                    <NavDropdown.Item href="/photos">Photos</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Classes" id="classes">
                                    <NavDropdown.Item href="/vocals">Vocals</NavDropdown.Item>
                                    <NavDropdown.Item href="/drums">Drums</NavDropdown.Item>
                                    <NavDropdown.Item href="/guitar">Guitar</NavDropdown.Item>
                                    <NavDropdown.Item href="/violin">Violin</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="/contact" className={activePath === '/contact' ? 'active' : ''}>Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                {showBackToTop && (

                    <div className="backToTopButton" onClick={handleBackToTopClick}>
                        <i className="bi bi-arrow-up-circle "></i>
                    </div>

                )}
            </div>
        </div>
    );
};

export default RHeader;