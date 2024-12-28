"use client";
import "./about.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import React from "react";
const images = [
  "/img/gallery/1.jpg",
  "/img/gallery/2.jpg",
  "/img/gallery/3.jpg",
  "/img/gallery/4.jpg",
];

const socialLinks = [
  { platform: "facebook", url: "https://www.facebook.com" },
  { platform: "whatsapp", url: "https://www.whatsapp.com" },
  { platform: "instagram", url: "https://www.instagram.com" },
  { platform: "linkedin", url: "https://www.linkedin.com" },
  { platform: "twitter", url: "https://www.twitter.com" },
];

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="social">
              <h2>
                Passionate Visual Designer, Webflow Developer and part time
                freelancer with a keen eye for details.
              </h2>
              <div className="follow-me">
                <p>Follow me</p>
                {socialLinks.map(({ platform, url }) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={`/img/${platform}.svg`}
                      alt={`${platform} icon`}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="content">
              <p>
                I specialize in UI/UX & Graphic Design and my passion is all
                about building elegant and professional user interfaces and
                websites. I also do branding and identity design such as logo
                design, and business cards, along with photo editing.
              </p>
              <div className="cta">
                <a href="#">Request Quotation</a>
                <a href="#">Visit My Channel</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Swiper
              className="gallery"
              navigation={true}
              pagination={{ clickable: true }}
              loop={true}
              modules={[Navigation]}
            >
              {images.map((src, index) => (
                <SwiperSlide key={index}>
                  <img src={src} alt={`Gallery image ${index + 1}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
