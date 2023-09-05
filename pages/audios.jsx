import Breadcrumbs from "@/components/Breadcrumbs"
import RHeader from "@/components/RHeader"
import Head from "next/head"
import React from 'react'
import Footer from "@/components/Footer"
import { audio } from '@/data/audio'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
const audios = () => {
    return (
        <>
            <Head>
                <meta property="og:url" content="https://www.ramenpaul.com/audios" />
                <meta
                    property="og:site_name"
                    content="Audios | Ramen Paul"
                />
                <meta
                    property="og:title"
                    content="Audios | Ramen Paul"
                />
                <meta
                    name="twitter:title"
                    content="Audios | Ramen Paul"
                />
                <title>Audios | Ramen Paul</title>
            </Head>
            <RHeader />
            <Breadcrumbs pageName="audio" />
            <main>
                <section id="audio">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                {audio.map((item, index) => (
                                    <div className="audio-box" key={index} data-aos="fade-up">
                                        <AudioPlayer

                                            src={item.src}
                                            preload="metadata"
                                            header={item.title}
                                            footer="By Ramen Paul"
                                        />
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

export default audios;

