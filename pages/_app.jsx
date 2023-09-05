import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/global.css'
import '../styles/home.css'
import '../styles/about.css'
import '../styles/contact.css'
import '../styles/photos.css'
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (

    <> <Component {...pageProps} />
    </>)

}
