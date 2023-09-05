import Breadcrumbs from "@/components/Breadcrumbs"
import RHeader from "@/components/RHeader"
import Head from "next/head"
import React from 'react'
import Footer from "@/components/Footer"
import { Videos } from "@/data/videos"
const videos = () => {
    return (
        <>
            <Head>
                <meta property="og:url" content="https://www.ramenpaul.com/videos" />
                <meta
                    property="og:site_name"
                    content="Videos | Ramen Paul"
                />
                <meta
                    property="og:title"
                    content="Videos | Ramen Paul"
                />
                <meta
                    name="twitter:title"
                    content="Videos | Ramen Paul"
                />
                <title>Videos | Ramen Paul</title>
            </Head>
            <RHeader />
            <Breadcrumbs pageName="videos" />
            <main>
                <section id="videos">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                {Videos.map((item, index) => (
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

export default videos;

