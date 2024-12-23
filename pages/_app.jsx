import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/global.css";
import "../styles/home.css";
import "../styles/about.css";
import "../styles/contact.css";
import "../styles/photos.css";
import "../styles/audios.css";
import "aos/dist/aos.css";
import GoogleAnalytics from "../components/GoogleAnalytics";
import AOS from "aos";
import { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="follow, index" />
        <meta
          name="keywords"
          content="ramenpaul, ramensir, ramen mcs, ramen western music, musicteacher"
        />
        <link rel="icon" href="/favicon.png" sizes="192x192"></link>
        <meta
          property="og:image"
          content={`https://www.ramenpaul.com/about-breadcrumb.jpg`}
        />
        <meta
          name="twitter:image"
          content={`https://www.ramenpaul.com/about-breadcrumb.jpg`}
        />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          property="og:description"
          content="Ramen Paul is a Authorized Trinity College, London Teacher | Certified in England, France, and the U.S."
        />
        <meta
          name="description"
          content="Ramen Paul is a Authorized Trinity College, London Teacher | Certified in England, France, and the U.S."
        />
        <meta
          name="twitter:description"
          content="Ramen Paul is a Authorized Trinity College, London Teacher | Certified in England, France, and the U.S."
        />
        {/* <Script dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-5N2JTQEZZ4');`
        }}>
        </Script> */}
        {/* <Script strategy="afterInteractive">
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-5N2JTQEZZ4');
    `}
        </Script>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-5N2JTQEZZ4"></Script> */}
        <GoogleAnalytics />

        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Organization",
              url: "https://www.ramenpaul.com/",
              name: "Ramen Paul | Western Music Teacher, Cellist and a Sound Engineer",
              logo: "https://www.ramenpaul.com/about-breadcrumb.jpg",
              description:
                "Ramen Paul is a Authorized Trinity College, London Teacher | Certified in England, France, and the U.S.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91 98110 71981",
                contactType: "customer service",
              },
              sameAs: [
                "https://www.facebook.com/ramen.paul.9",
                "https://twitter.com/ramen_paul",
                "https://www.instagram.com/ramen_paul",
                "https://www.linkedin.com/in/ramen-paul-6a612180/",
                "https://www.youtube.com/user/ramensir",
              ],
            }),
          }}
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
