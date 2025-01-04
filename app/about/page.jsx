import "./about.scss";
import Bio from "../components/Bio";
import Header from "../components/Header";
import About from "../components/About";
import Awards from "../components/Awards";
import Footer from "../components/Footer";
import Lesson from "../components/Lesson";

export default function AboutPage() {
  return (
    <>
      <Header />
      <About />
      <Bio />
      <Awards />
      <Lesson />
      <Footer />
    </>
  );
}
