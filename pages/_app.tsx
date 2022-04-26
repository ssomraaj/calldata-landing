import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '@/root/components/Layout';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>CallData - Decentralized Announcement Network</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          content="CallData - Decentralized Announcement Network"
          name="title"
        />
        <meta
          content="A Web3 communication platform for dapps to engage with their users directly using the blockchain. Reduce the risk of exposing users to Web2 hacks."
          name="description"
        />
        <meta content="calldata, DAN, decentralized" name="keywords" />
        <meta content="index, follow" name="robots" />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="English" name="language" />
        <meta content="1 days" name="revisit-after" />
        <meta content="sujith somraaj" name="author" />
        <meta content="#ffffff" name="theme-color" />
        <link
          href="/apple-icon-57x57.png"
          rel="apple-touch-icon"
          sizes="57x57"
        />
        <link
          href="/apple-icon-60x60.png"
          rel="apple-touch-icon"
          sizes="60x60"
        />
        <link
          href="/apple-icon-72x72.png"
          rel="apple-touch-icon"
          sizes="72x72"
        />
        <link
          href="/apple-icon-76x76.png"
          rel="apple-touch-icon"
          sizes="76x76"
        />
        <link
          href="/apple-icon-114x114.png"
          rel="apple-touch-icon"
          sizes="114x114"
        />
        <link
          href="/apple-icon-120x120.png"
          rel="apple-touch-icon"
          sizes="120x120"
        />
        <link
          href="/apple-icon-144x144.png"
          rel="apple-touch-icon"
          sizes="144x144"
        />
        <link
          href="/apple-icon-152x152.png"
          rel="apple-touch-icon"
          sizes="152x152"
        />
        <link
          href="/apple-icon-180x180.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/android-icon-192x192.png"
          rel="icon"
          sizes="192x192"
          type="image/png"
        />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/favicon-96x96.png"
          rel="icon"
          sizes="96x96"
          type="image/png"
        />
        <link
          href="/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link href="/manifest.json" rel="manifest" />
        <meta content="#ffffff" name="msapplication-TileColor" />
        <meta content="/ms-icon-144x144.png" name="msapplication-TileImage" />
        <meta content="#ffffff" name="theme-color" />

        <meta
          content="CallData - Decentralized Announcement Network"
          property="og:title"
        />
        <meta content="calldata.xyz" property="og:site_name" />
        <meta content="https://calldata.xyz" property="og:url" />
        <meta
          content="A Web3 communication platform for dapps to engage with their users directly using the blockchain. Reduce the risk of exposing users to Web2 hacks."
          property="og:description"
        />
        <meta content="product" property="og:type" />
        <meta content="https://calldata.xyz/og_image.png" property="og:image" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
