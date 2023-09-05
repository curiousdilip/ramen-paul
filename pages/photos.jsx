import Breadcrumbs from "@/components/Breadcrumbs"
import RHeader from "@/components/RHeader"
import Head from "next/head"
import Image from "next/image"
import React from 'react'
import Footer from "@/components/Footer"
import { gridPhoto, photo } from "@/data/photo"
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
                <meta property="og:url" content="https://www.ramenpaul.com/photos" />
                <meta
                    property="og:site_name"
                    content="Photos | Ramen Paul"
                />
                <meta
                    property="og:title"
                    content="Photos | Ramen Paul"
                />
                <meta
                    name="twitter:title"
                    content="Photos | Ramen Paul"
                />
                <title>Photos | Ramen Paul</title>
            </Head>
            <RHeader />
            <Breadcrumbs pageName="photos" />
            <main>
                {/* <section id="photos-hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <Swiper
                                    slidesPerView={1}
                                    navigation={true}
                                    pagination={true}
                                    spaceBetween={10}
                                    modules={[Navigation, Pagination]}
                                >
                                    {photo.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="image-box">
                                                <Image
                                                    src={item.src}
                                                    alt={item.alt}
                                                    width={500}
                                                    height={300}
                                                    style={{ objectFit: "cover" }}
                                                    loading={index === 0 ? "eager" : "lazy"} // Load the first image eagerly
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </section> */}

                <section id="grid-images">
                    <div className="container">
                        <div className="col-md-12">
                            <div className="images">
                                {gridPhoto.map((item, index) => (
                                    <div className="image" key={index}>
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            width={300}
                                            height={300}
                                            style={{ objectFit: "cover" }}
                                            loading={index === 0 ? "eager" : "lazy"} // Load the first image eagerly
                                        />
                                    </div>
                                ))}
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

