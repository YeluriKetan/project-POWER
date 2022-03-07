import Header from "./../components/header";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Personal Website of Yeluri Ketan" />
        <title>About</title>
      </Head>
      <Header about></Header>
      <main>Coming Soon...</main>
    </>
  );
}
