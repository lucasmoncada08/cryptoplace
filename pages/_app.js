import { ThemeProvider } from 'next-themes';
import Script from 'next/script';
import Head from 'next/head';

import { Navbar, Footer } from '../components/index';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Cryptoplace</title>
      <meta name="description" content="nft marketplace application using ethereum" />
    </Head>
    <ThemeProvider attribute="class">
      <div className="dark:bg-nft-dark bg-white min-h-screen">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>

      <Script src="https://kit.fontawesome.com/196cd69171.js" crossorigin="anonymous" />
    </ThemeProvider>
  </>
);

export default MyApp;
