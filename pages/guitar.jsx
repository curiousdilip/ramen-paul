import Breadcrumbs from "@/components/Breadcrumbs"
import RHeader from "@/components/RHeader"
import Head from "next/head"
import React from 'react'
import Footer from "@/components/Footer"
import { guitarVideos } from "@/data/guitar"
const guitar = () => {
    return (
        <>
            <Head>
                <title>Guitar | Ramen Paul</title>
                <meta name="description" content="Hi, I’m Ramen Paul, Authorized teacher of Trinity College, London." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <RHeader />
            <Breadcrumbs pageName="guitar" />
            <main>
                <section id="guitar-tutorials">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                {guitarVideos.map((item, index) => (
                                    <div className="video-box" key={index} data-aos="fade-up">
                                        <iframe width="100%" height="650" src={item.srcLink} title={item.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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

export default guitar;

