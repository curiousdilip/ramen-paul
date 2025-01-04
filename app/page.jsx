import Awards from "./components/Awards";
import Bio from "./components/Bio";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Lesson from "./components/Lesson";
import Taught from "./components/TAught";
import Testimonials from "./components/Testimonials";
import "./home.scss";
export default function Home() {
  return (
    <>
      <Header />
      <section id="hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="/img/hero-image.jpg   "
                alt=" photo of ramen paul with his bike"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <div className="content">
                <div className="role">
                  <div className="d-flex align-items-center">
                    <div className="line"></div>
                    <div className="text">
                      <p>Western Music Teacher</p>
                      <p>Cellist and a Sound Engineer</p>
                    </div>
                  </div>
                </div>
                <h1>
                  Hello, I'm
                  <br />
                  Ramen Paul.
                </h1>
                <h2>
                  I am an authorized Trinity College London music teacher,
                  certified in England, France, and the U.S., specializing in
                  music education.
                </h2>
                <div className="cta">
                  <div className="btn1">
                    <a href="/contact">Say Hello</a>
                  </div>
                  <div className="btn2">
                    <a href="/tutorials">View Tutorials</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Bio />
      <Taught />
      <Testimonials />
      <Awards />
      <Lesson />

      <Footer />
    </>
  );
}
