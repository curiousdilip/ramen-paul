import Breadcrumbs from "@/components/Breadcrumbs"
import RHeader from "@/components/RHeader"
import Head from "next/head"
import React from 'react'
import Footer from "@/components/Footer"
import { drumsVideos } from '@/data/drums'
import VideoBox from "@/components/VideoBox"
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

export default drums;

