import Image from 'next/image'
import React from 'react'
import { useEffect } from "react";
const HeroSlider = () => {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
    return (
        <>
            <div id="hero-carousel" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Image
                            src="/gallery/1.jpg"
                            width={1920}
                            height={500}
                            alt="Slider 1"
                            className="d-block w-100"
                            style={
                                { height: "100vh", objectFit: "cover" }
                            }
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Western Music Teacher</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        {/* <img src="..." className="d-block w-100" alt="..."> */}
                        <Image
                            src="/gallery/5.jpg"
                            width={1920}
                            height={500}
                            alt="Slider 1"
                            className="d-block w-100" style={
                                { height: "100vh", objectFit: "cover" }
                            }
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Cellist</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        {/* <img src="..." className="d-block w-100" alt="..."> */}
                        <Image
                            src="/gallery/7.jpg"
                            width={1920}
                            height={500}
                            alt="Slider 1"
                            className="d-block w-100" style={
                                { height: "100vh", objectFit: "cover" }
                            }
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Sound Engineer</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </>
    )
}

export default HeroSlider
