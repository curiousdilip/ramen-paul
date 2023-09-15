import Header from "@/components/Header";
import Head from "next/head";

import Image from "next/image";
import Footer from "@/components/Footer";
import { gallery } from "@/data/home";
import VideoBox from "@/components/VideoBox";

export default function Home() {
  return (
    <>
      <Head>
        <meta property="og:url" content="https://www.ramenpaul.com/" />
        <meta
          property="og:site_name"
          content="Ramen Paul | Cellist and a Sound Engineer"
        />
        <meta
          property="og:title"
          content="Ramen Paul | Cellist and a Sound Engineer"
        />
        <meta
          name="twitter:title"
          content="Ramen Paul | Cellist and a Sound Engineer"
        />
        <title>Ramen Paul | Cellist and a Sound Engineer</title>
      </Head>
      <Header />
      <main>
        <section id="hero">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h3 data-aos="fade-up">Ramen Paul</h3>
                <h1 data-aos="fade-up">
                  Western Music Teacher, Cellist and a Sound Engineer
                </h1>
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
                  src="/about-img.jpg"
                  width={300}
                  height={500}
                  alt="Picture of Ramen Paul"
                />
              </div>
              <div className="col-md-8">
                <h2 data-aos="fade-left" className="mb-3">About Me</h2>

                <p data-aos="fade-left" className="mb-2">Born in Kolkata and started learning music at the age of five. Went to a British boarding school and started learning violin and cello from a British teacher.</p>

                <p data-aos="fade-left" className="mb-2">   Went to England To study cello and then France to study orchestral music and finally went to United States to study sound Engineering, sound production,voice training,Composition And conducting.</p>
                <p data-aos="fade-left">
                  Come back to India and started working in mumbai studios For the bollywood industry But with a year Moved to Delhi And started
                  His own school called ramen School of music,a place For pure western music only....
                  Ramen Paul is an authorised teacher after Trinity College Of music London as well as rock school, trinity rock and pop, Royal school of music etc ...Helping, teaching and preparing thousands of students with All sorts of international examinations.</p>
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
                <div className="gallery">

                  {gallery.map((item, index) => (
                    <div className="box" key={index} data-aos="fade-up">
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
                <VideoBox embedID={"ZKAt7HzIpmo"} />
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
