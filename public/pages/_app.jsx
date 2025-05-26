import Head from 'next/head';
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico?v=2" />

        <title>My Awesome App</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
