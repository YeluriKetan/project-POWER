import Head from "next/head";
import Header from "../components/header";
import homeStyles from "../styles/Home.module.scss";
import utilStyles from "../styles/utils.module.scss";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className={utilStyles.page}>
      <Header page="home"></Header>
      <Head>
        <title>Yeluri Ketan</title>
      </Head>
      <main className={homeStyles.main}>
        <article className={homeStyles.article}>
          <Image
            src="/images/welcome.png"
            width="500"
            height="300"
            style={{ objectFit: "scale-down" }}
            alt="Welcome to my website"
            priority
          />
        </article>
        <article className={homeStyles.meanwhile}>
          <div className={homeStyles.article}>
            <Link legacyBehavior href="/blog">
              <a className={homeStyles.ignoreLink}>
                <section className={homeStyles.section}>
                  <p>
                    Care to indulge in some of my shenanigans, escapades, or
                    learnings?
                  </p>
                  <p>
                    Check out my <b>Blog</b>.
                  </p>
                </section>
              </a>
            </Link>
            <Link legacyBehavior href="/projects">
              <a className={homeStyles.ignoreLink}>
                <section className={homeStyles.section}>
                  <p>
                    Want to read some boring articles about projects/work I have
                    done?
                  </p>
                  <p>
                    Head on over to <b>Projects</b>.
                  </p>
                </section>
              </a>
            </Link>
            <Link legacyBehavior href="/gallery">
              <a className={homeStyles.ignoreLink}>
                <section className={homeStyles.section}>
                  <p>Want to see some photographs I took?</p>
                  <p>
                    Visit the <b>Gallery</b>.
                  </p>
                </section>
              </a>
            </Link>
            <Link legacyBehavior href="/about">
              <a className={homeStyles.ignoreLink}>
                <section className={homeStyles.section}>
                  <p>Want to find out more about me?</p>
                  <p>
                    I would suggest taking a look at <b>About</b>.
                  </p>
                </section>
              </a>
            </Link>
          </div>
          <p className={homeStyles.currentStatus}>
            Currently playing <b>F1 Clash</b>, listening to{" "}
            <b>Across the Spiderverse - Metro Boomin</b>
          </p>
        </article>
      </main>
      <Footer></Footer>
    </div>
  );
}
