import Breadcrumbs from "@/components/Breadcrumbs"
import RHeader from "@/components/RHeader"
import Head from "next/head"
import React from 'react'
import Footer from "@/components/Footer"
import { drumsVideos } from '@/data/drums'
const drums = () => {
    return (
        <>
            <Head>
                <meta property="og:url" content="https://www.ramenpaul.com/drums" />
                <meta
                    property="og:site_name"
                    content="Drums | Ramen Paul"
                />
                <meta
                    property="og:title"
                    content="Drums | Ramen Paul"
                />
                <meta
                    name="twitter:title"
                    content="Drums | Ramen Paul"
                />
                <title>Drums | Ramen Paul</title>
            </Head>
            <RHeader />
            <Breadcrumbs pageName="drums" />
            <main>
                <section id="drums-tutorials">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                {drumsVideos.map((item, index) => (
                                    <div className="video-box" key={index} data-aos="fade-up">
                                        <iframe width="100%" height="650" src={item.srcLink} title={item.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen loading="lazy"></iframe>
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

export default drums;

