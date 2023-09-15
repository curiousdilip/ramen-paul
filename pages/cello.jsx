import Breadcrumbs from '@/components/Breadcrumbs'
import Footer from '@/components/Footer'
import RHeader from '@/components/RHeader'
import React from 'react'
import Head from 'next/head'
import { celloVideos } from "@/data/cello"
import VideoBox from "@/components/VideoBox"
const cello = () => {
    return (
        <>

            <Head>
                <meta property="og:url" content="https://www.ramenpaul.com/cello" />
                <meta
                    property="og:site_name"
                    content="Cello | Ramen Paul"
                />
                <meta
                    property="og:title"
                    content="Cello | Ramen Paul"
                />
                <meta
                    name="twitter:title"
                    content="Cello | Ramen Paul"
                />
                <title>Cello | Ramen Paul</title>
            </Head>
            <RHeader />
            <Breadcrumbs pageName="cello" />
            <main>
                <section id="cello-tutorials">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                {celloVideos.map((item, index) => (
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

export default cello
