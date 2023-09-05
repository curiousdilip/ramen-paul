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
                <section id="drums-tutorials">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                {/* {audio.map((item, index) => (
                                    <div className="video-box" key={index}>
                                        <iframe width="100%" height="650" src={item.srcLink} title={item.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </div>
                                ))} */}


                                {audio.map((item, index) => (
                                    <div className="audio-box" key={index}>
                                        <AudioPlayer

                                            src={item.src}
                                            preload="metadata"
                                            header={item.title}
                                            footer="By Ramen Paul"
                                        // other props here
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

