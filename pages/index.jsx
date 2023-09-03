import Header from "@/components/Header"
import Head from "next/head"
import AOS from 'aos';
import Image from "next/image";
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <Head>
        <title>Ramen Paul – We are Nothing</title>
        <meta name="description" content="Hi, I’m Ramen Paul, Authorized teacher of Trinity College, London." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>
        <section id="hero">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 data-aos="fade-up">Ramen Paul</h1>
                <h3 data-aos="fade-up">Cellist cum all Rounder and a Sound Engineer</h3>
                <div className="hero-btn">
                  <a href="#about" data-aos="fade-right">Know More</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="quote">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <p>Music expresses that which cannot be said and on which it is impossible to be silent.
                </p>
                <p>Victor Hugo</p>
                <h4></h4>
              </div>
            </div>
          </div>
        </section>
        <section id="about">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-4">
                <Image
                  src="/about-img.png"
                  width={300}
                  height={500}
                  alt="Picture of Ramen Paul"
                />
              </div>
              <div className="col-md-8">
                <h2>About Me</h2>
                <h4>Hi, I’m Ramen Paul, Authorized teacher of Trinity College, London.
                </h4>
                <h5>Trained in England (1993) France(1994) and U.S. (1995-98) Teaching music since last 15 years,authorized teacher of Trinity college, Rock school, Rock and Pop and Royal college, London.Have performed in 22 countries with the Calcutta String Quartet and now playing with the Delhi String Quartet.Have sent many students for international examinations.
                </h5>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
