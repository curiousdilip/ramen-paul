import Breadcrumbs from "@/components/Breadcrumbs"
import RHeader from "@/components/RHeader"
import Head from "next/head"
import React from 'react'
import Image from "next/image"
import Experience from "@/components/Experience"
import Education from "@/components/Education"
import Footer from "@/components/Footer"
const about = () => {
    return (
        <>
            <Head>
                <title>About | Ramen Paul</title>
                <meta name="description" content="Hi, I’m Ramen Paul, Authorized teacher of Trinity College, London." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <RHeader />
            <Breadcrumbs pageName="about" />
            <main>
                <section id="about-hero">
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-md-6">
                                <Image data-aos="fade-right"
                                    src="/about-img.png"
                                    width={400}
                                    height={400}
                                    style={{
                                        objectFit: "cover",
                                        borderRadius: "50%"
                                    }}
                                    alt="Picture of Ramen Paul"
                                />
                            </div>
                            <div className="col-md-6">
                                <h2 data-aos="fade-left">About Me</h2>
                                <h4 data-aos="fade-left">
                                    Hi, I’m Ramen Paul, Authorized teacher of Trinity College,
                                    London.
                                </h4>
                                <h5 data-aos="fade-left">
                                    Trained in England (1993) France(1994) and U.S. (1995-98)
                                    Teaching music since last 15 years,authorized teacher of
                                    Trinity college, Rock school, Rock and Pop and Royal college,
                                    London.Have performed in 22 countries with the Calcutta String
                                    Quartet and now playing with the Delhi String Quartet.Have
                                    sent many students for international examinations.
                                </h5>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="about-work">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h2 >Work Experience</h2>
                                <Experience />

                            </div>
                            <div className="col-md-6">  <Image data-aos="fade-left"
                                src="/about-work.jpeg"
                                width={500}
                                height={300}
                                style={{
                                    objectFit: "cover",
                                    borderRadius: "20px"
                                }}
                                alt="Picture of Ramen Paul"
                            /></div>
                        </div>
                    </div>
                </section>
                <section id="about-education">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <Image data-aos="fade-right"
                                    src="/about-work.jpeg"
                                    width={500}
                                    height={300}
                                    style={{
                                        objectFit: "cover",
                                        borderRadius: "20px"
                                    }}
                                    alt="Picture of Ramen Paul"
                                />
                            </div>
                            <div className="col-md-6">
                                <h2>Education</h2>
                                <Education />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default about

