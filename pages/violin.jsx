import Breadcrumbs from "@/components/Breadcrumbs"
import RHeader from "@/components/RHeader"
import Head from "next/head"
import React from 'react'
import Footer from "@/components/Footer"
import { violinVideos } from "@/data/violin"
const violin = () => {
    return (
        <>
            <Head>
                <meta property="og:url" content="https://www.ramenpaul.com/violin" />
                <meta
                    property="og:site_name"
                    content="Violin | Ramen Paul"
                />
                <meta
                    property="og:title"
                    content="Violin | Ramen Paul"
                />
                <meta
                    name="twitter:title"
                    content="Violin | Ramen Paul"
                />
                <title>Violin | Ramen Paul</title>
            </Head>
            <RHeader />
            <Breadcrumbs pageName="violin" />
            <main>
                <section id="violin-tutorials">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                {violinVideos.map((item, index) => (
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

export default violin;

