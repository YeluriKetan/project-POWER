import Header from "./../components/header";
import Head from "next/head";
import aboutStyles from "../styles/About.module.scss";
import utilStyles from "../styles/utils.module.scss";
import { getAboutData } from "../lib/about";
import Footer from "../components/footer";

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
    <div className={utilStyles.page}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Personal Website of Yeluri Ketan" />
        <title>About</title>
      </Head>
      <Header page={"about"}></Header>
      <main className={aboutStyles.main}>
        <div dangerouslySetInnerHTML={{ __html: aboutData.contentHtml }} />
      </main>
      <Footer></Footer>
    </div>
  );
}
