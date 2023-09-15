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
                <meta property="og:url" content="https://www.ramenpaul.com/about" />
                <meta
                    property="og:site_name"
                    content="About | Ramen Paul"
                />
                <meta
                    property="og:title"
                    content="About | Ramen Paul"
                />
                <meta
                    name="twitter:title"
                    content="About | Ramen Paul"
                />
                <title>About | Ramen Paul</title>
            </Head>
            <RHeader />
            <Breadcrumbs pageName="about" />
            <main>
                <section id="about-hero">
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-md-6">
                                <Image data-aos="fade-right"
                                    src="/about-img.jpg"
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
                                <h2 data-aos="fade-left" className="mb-3">About Me</h2>

                                <p data-aos="fade-left" className="mb-2">Born in Kolkata and started learning music at the age of five. Went to a British boarding school and started learning violin and cello from a British teacher.</p>

                                <p data-aos="fade-left" className="mb-2">   Went to England To study cello and then France to study orchestral music and finally went to United States to study sound Engineering, sound production,voice training,Composition And conducting.</p>
                                <p data-aos="fade-left">
                                    Come back to India and started working in mumbai studios For the bollywood industry But with a year Moved to Delhi And started
                                    His own school called ramen School of music,a place For pure western music only....
                                    Ramen Paul is an authorised teacher after Trinity College Of music London as well as rock school, trinity rock and pop, Royal school of music etc ...Helping, teaching and preparing thousands of students with All sorts of international examinations.</p>
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

