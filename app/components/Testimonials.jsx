"use client";
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "./testimonials.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="content">
              <h2>
                What my Students
                <br />
                say about my me!
              </h2>

              <Swiper
                className="reviews"
                navigation
                pagination={{ clickable: true }}
                loop={true}
                modules={[Navigation, Pagination]}
              >
                <SwiperSlide>
                  <p className="review">
                    Ramen sir is the best teacher we have ever seen. He teaches
                    western music and singing to my son and he progressed in
                    various fields because of sir motivation and teachings.
                  </p>
                  <h3 className="name">Geetika Grover Mukhija</h3>
                </SwiperSlide>
                <SwiperSlide>
                  <p className="review">
                    I would recommend anyone to join this school who takes music
                    seriously because not only Ramen Sir is the best teacher in
                    the town but also a great Human being.
                  </p>
                  <h3 className="name">El Guaje</h3>
                </SwiperSlide>
                <SwiperSlide>
                  <p className="review">
                    My experience with Ramen sir has been gorgeous. It's been 16
                    years with Ramen sir, I was meant to sing but never knew was
                    meant to play the piano as well. He is a maestro with a HUGE
                    knowledge and HUGE experience.
                  </p>
                  <h3 className="name">Kanika Nayyar</h3>
                </SwiperSlide>
                <SwiperSlide>
                  <p className="review">
                    Learn from an absolute multi-instrumental beast. A cellist
                    by trade, Ramen Sir has helped thousands gain their musical
                    certifications from Trinity Guildhall, ABRSM and Rock School
                    to name a few.
                  </p>
                  <h3 className="name">Christy Varghese</h3>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="col-md-6">
            <div className="img-container">
              <img
                src="/img/testimonial-image.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
