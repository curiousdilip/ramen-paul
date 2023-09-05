import Header from "@/components/Header";
import Head from "next/head";

import Image from "next/image";


import Footer from "@/components/Footer";
import { gallery } from "@/data/home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ramen Paul | We are Nothing</title>
        <meta
          name="description"
          content="Hi, I’m Ramen Paul, Authorized teacher of Trinity College, London."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>
        <section id="hero">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 data-aos="fade-up">Ramen Paul</h1>
                <h3 data-aos="fade-up">
                  Western Music Teacher, Cellist and a Sound Engineer
                </h3>
                <div className="hero-btn">
                  <a href="#about" data-aos="fade-right">
                    Know More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="quote">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <p>
                  Music expresses that which cannot be said and on which it is
                  impossible to be silent.
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
                <Image data-aos="fade-right"
                  src="/about-img.png"
                  width={300}
                  height={500}
                  alt="Picture of Ramen Paul"
                />
              </div>
              <div className="col-md-8">
                <h2 data-aos="fade-left">About Me</h2>
                <h4 data-aos="fade-left">
                  Hi, I’m Ramen Paul, Authorized teacher of Trinity College,
                  London.
                </h4>
                <h5 data-aos="fade-left">
                  Trained in England (1993) France(1994) and U.S. (1995-98)
                  Teaching music since last 15 years,authorized teacher of
                  Trinity college, Rock school, Rock and Pop and Royal college,
                  London.Have performed in 22 countries with the Calcutta String
                  Quartet and now playing with the Delhi String Quartet.Have
                  sent many students for international examinations.
                </h5>
              </div>
            </div>
          </div>
        </section>
        <section id="gallery-home">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 data-aos="fade-up">Gallery</h2>

              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="gallery" data-aos="fade-up">

                  {gallery.map((item, index) => (
                    <div className="box" key={index}>
                      <Image
                        src={
                          item.src
                        }
                        width={350}
                        height={250}
                        alt={item.alt}
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  ))}

                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="feature">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <iframe
                  width="100%"
                  src="https://www.youtube.com/embed/ZKAt7HzIpmo"
                  title="learn violin initial part -1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        <section id="tutorials">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 data-aos="fade-up">Tutorials</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 text-center">
                <a href="/violin" className="violin" data-aos="fade-up">
                  <div className="class-box">
                    <i className="bi bi-music-note-beamed"></i>
                    <h3>Violin</h3>
                    <p>Free Violin Tutorials for Beginners</p>
                  </div>
                </a>
              </div>
              <div className="col-md-3 text-center">
                <a href="/guitar" className="guitar" data-aos="fade-up">
                  <div className="class-box">
                    <i className="bi bi-music-note-beamed"></i>
                    <h3>Guitar</h3>
                    <p>Free Guitar Tutorials for Beginners</p>
                  </div>
                </a>
              </div>
              <div className="col-md-3 text-center">
                <a href="/vocals" className="vocals" data-aos="fade-up">
                  <div className="class-box">
                    <i className="bi bi-music-note-beamed"></i>
                    <h3>Vocals</h3>
                    <p>Free Vocals Tutorials for Beginners</p>
                  </div>
                </a>
              </div>
              <div className="col-md-3 text-center">
                <a href="/drums" className="drums" data-aos="fade-up">
                  <div className="class-box">
                    <i className="bi bi-music-note-beamed"></i>
                    <h3>Drums</h3>
                    <p>Free Drums Tutorials for Beginners</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="contact">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 data-aos="fade-up">Contact Me</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="ct-box">
                  <i className="bi bi-map"></i>
                  <p> Dwarka , New Delhi, India</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="ct-box">
                  <i className="bi bi-envelope"> </i>
                  <p> ramen.paul14@gmail.com</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="ct-box">
                  <i className="bi bi-telephone"> </i>
                  <p> +91 98110 71981</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main >
      <Footer />
    </>
  );
}
