import Breadcrumbs from "@/components/Breadcrumbs"
import RHeader from "@/components/RHeader"
import Head from "next/head"
import Image from "next/image"
import React from 'react'
import Footer from "@/components/Footer"
import { photo } from "@/data/photo"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const photos = () => {
    return (
        <>
            <Head>
                <title>Vocals | Ramen Paul</title>
                <meta name="description" content="Hi, I’m Ramen Paul, Authorized teacher of Trinity College, London." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <RHeader />
            <Breadcrumbs pageName="vocals" />
            <main>
                <section id="photos-hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <Swiper
                                    slidesPerView={1}
                                    navigation={true}
                                    spaceBetween={10}
                                    loop={true}
                                    breakpoints={{
                                        640: {
                                            slidesPerView: 1,
                                            spaceBetween: 20,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                            spaceBetween: 40,
                                        },
                                        1024: {
                                            slidesPerView: 3,
                                            spaceBetween: 50,
                                        },
                                    }}
                                    modules={[Navigation, Pagination]}
                                    className="reviews"
                                >
                                    {photo.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="image-box">
                                                <Image
                                                    src={item.src}
                                                    alt={item.alt}
                                                    width={300}
                                                    height={500}
                                                    className="img-fluid"
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default photos;

