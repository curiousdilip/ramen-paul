import Header from "@/components/Header";
import Head from "next/head";
import AOS from "aos";
import Image from "next/image";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>Ramen Paul – We are Nothing</title>
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
                  Cellist cum all Rounder and a Sound Engineer
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
                <Image
                  src="/about-img.png"
                  width={300}
                  height={500}
                  alt="Picture of Ramen Paul"
                />
              </div>
              <div className="col-md-8">
                <h2>About Me</h2>
                <h4>
                  Hi, I’m Ramen Paul, Authorized teacher of Trinity College,
                  London.
                </h4>
                <h5>
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
                <h2>Gallery</h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur necessitatibus voluptatum aliquid quibusdam
                inventore sint cumque quis maiores autem velit exercitationem
                amet vero eaque accusantium distinctio pariatur, quaerat, ipsam
                repellat.
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
                  height="653"
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
                <h2>Tutorials</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 text-center">
                <a href="" className="violin">
                  <div className="class-box">
                    <i className="bi bi-music-note-beamed"></i>
                    <h3>Violin</h3>
                    <p>Free Violin Tutorials for Beginners</p>
                  </div>
                </a>
              </div>
              <div className="col-md-3 text-center">
                <a href="" className="guitar">
                  <div className="class-box">
                    <i className="bi bi-music-note-beamed"></i>
                    <h3>Guitar</h3>
                    <p>Free Guitar Tutorials for Beginners</p>
                  </div>
                </a>
              </div>
              <div className="col-md-3 text-center">
                <a href="" className="vocals">
                  <div className="class-box">
                    <i className="bi bi-music-note-beamed"></i>
                    <h3>Vocals</h3>
                    <p>Free Vocals Tutorials for Beginners</p>
                  </div>
                </a>
              </div>
              <div className="col-md-3 text-center">
                <a href="" className="drums">
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
                <h2>Contact Me</h2>
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
      </main>
    </>
  );
}
