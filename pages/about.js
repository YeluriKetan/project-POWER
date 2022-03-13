import Header from "./../components/header";
import Head from "next/head";
import aboutStyles from "../styles/About.module.scss";
import { getAboutData } from "../lib/about";

export async function getStaticProps() {
  const aboutData = await getAboutData();
  return {
    props: {
      aboutData,
    },
  };
}

export default function About({ aboutData }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Personal Website of Yeluri Ketan" />
        <title>About</title>
      </Head>
      <Header about></Header>
      <main className={aboutStyles.main}>
        <div dangerouslySetInnerHTML={{ __html: aboutData.contentHtml }} />
      </main>
    </>
  );
}
