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
                <title>Audios | Ramen Paul</title>
                <meta name="description" content="Hi, I’m Ramen Paul, Authorized teacher of Trinity College, London." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
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

