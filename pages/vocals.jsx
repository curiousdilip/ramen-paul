import Breadcrumbs from "@/components/Breadcrumbs"
import RHeader from "@/components/RHeader"
import Head from "next/head"
import React from 'react'
import Footer from "@/components/Footer"
import { vocalsVideos } from "@/data/vocals"
import VideoBox from "@/components/VideoBox"
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
                                    <VideoBox embedID={item.id} key={index} />
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

