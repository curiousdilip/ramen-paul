import Head from 'next/head';

const GoogleAnalytics = () => (
    <>
        <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-5N2JTQEZZ4"
        />
        <script
            dangerouslySetInnerHTML={{
                __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', 'G-5N2JTQEZZ4');
        `,
            }}
        />
    </>
);

export default GoogleAnalytics;
