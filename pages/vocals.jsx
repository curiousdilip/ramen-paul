import Breadcrumbs from "@/components/Breadcrumbs"
import RHeader from "@/components/RHeader"
import Head from "next/head"
import React from 'react'
import Footer from "@/components/Footer"
import { vocalsVideos } from "@/data/vocals"
const vocals = () => {
    return (
        <>
            <Head>
                <meta property="og:url" content="https://www.ramenpaul.com/vocals" />
                <meta
                    property="og:site_name"
                    content="Vocals | Ramen Paul"
                />
                <meta
                    property="og:title"
                    content="Vocals | Ramen Paul"
                />
                <meta
                    name="twitter:title"
                    content="Vocals | Ramen Paul"
                />
                <title>Vocals | Ramen Paul</title>
            </Head>
            <RHeader />
            <Breadcrumbs pageName="vocals" />
            <main>
                <section id="vocal-tutorials">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                {vocalsVideos.map((item, index) => (
                                    <div className="video-box" key={index}>
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

export default vocals;

