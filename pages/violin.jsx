import Breadcrumbs from "@/components/Breadcrumbs"
import RHeader from "@/components/RHeader"
import Head from "next/head"
import React from 'react'
import Footer from "@/components/Footer"
import { violinVideos } from "@/data/violin"
import guitar from "./guitar"
import { guitarVideos } from "@/data/guitar"
import VideoBox from "@/components/VideoBox"
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

export default violin;

