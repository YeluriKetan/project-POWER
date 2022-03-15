import Head from "next/head";
import "../styles/global.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/a.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
