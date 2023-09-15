import Breadcrumbs from '@/components/Breadcrumbs'
import Footer from '@/components/Footer'
import RHeader from '@/components/RHeader'
import React from 'react'
import Head from 'next/head'
import { pianoVideos } from "@/data/piano"
import VideoBox from "@/components/VideoBox"
const piano = () => {
    return (
        <>

            <Head>
                <meta property="og:url" content="https://www.ramenpaul.com/piano" />
                <meta
                    property="og:site_name"
                    content="Piano | Ramen Paul"
                />
                <meta
                    property="og:title"
                    content="Piano | Ramen Paul"
                />
                <meta
                    name="twitter:title"
                    content="Piano | Ramen Paul"
                />
                <title>Piano | Ramen Paul</title>
            </Head>
            <RHeader />
            <Breadcrumbs pageName="piano" />
            <main>
                <section id="piano-tutorials">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                {pianoVideos.map((item, index) => (
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

export default piano
