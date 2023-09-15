"use client"
import classnames from 'classnames';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';


const Header = () => {
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

    const scroll = classnames('mainHeader', {
        'scrolled': scrolled,
    })

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return (
        <header className={scroll}>

            <nav class="navbar navbar-expand-lg fixed-top ">
                <div class="container">
                    <Link class="navbar-brand" href="/"> <h2>Ramen Paul</h2></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#hamburger" aria-controls="hamburger" aria-expanded="false" aria-label="Toggle navigation">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </button>
                    <div class="collapse navbar-collapse" id="hamburger">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

                            <li class="nav-item">
                                <Link class="nav-link" href="/about">About</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Gallery
                                </Link>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" href="/videos">Videos</Link></li>
                                    <li><Link class="dropdown-item" href="/photos">Photos</Link></li>
                                    <li><Link class="dropdown-item" href="/audios">Audios</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Tutorial
                                </a>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" href="/vocals">Vocals</Link></li>
                                    <li><Link class="dropdown-item" href="/violin">Violin</Link></li>
                                    <li><Link class="dropdown-item" href="/piano">Piano</Link></li>
                                    <li><Link class="dropdown-item" href="/cello">Cello</Link></li>
                                    <li><Link class="dropdown-item" href="/guitar">Guitar</Link></li>
                                    <li><Link class="dropdown-item" href="/drums">Drums</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {showBackToTop && (

                <div className="backToTopButton" onClick={handleBackToTopClick}>
                    <i className="bi bi-arrow-up-circle "></i>
                </div>

            )}
        </header>
    );
};

export default Header;