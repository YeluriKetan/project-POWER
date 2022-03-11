import Head from "next/head";
import Header from "../components/header";
import homeStyles from "../styles/Home.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header home></Header>
      <Head>
        <title>Yeluri Ketan</title>
      </Head>
      <main className={homeStyles.main}>
        <article className={homeStyles.article}>
          <Image
            src="/images/welcome.png"
            width="500"
            height="300"
            objectFit="scale-down"
            alt="Welcome to my website"
            priority
          />
        </article>
        <article className={homeStyles.iconArticle}>
          <a
            href="https://www.linkedin.com/in/ketanyeluri/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/images/linkedin.svg"
              width="50"
              height="50"
              alt="Link to my LinkedIn profile"
              priority
            />
          </a>
          <a
            href="https://www.instagram.com/legend_for_eternity/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/images/instagram.png"
              width="50"
              height="50"
              alt="Link to my Instagram account"
              priority
            />
          </a>
          <a
            href="https://github.com/YeluriKetan/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/images/github.png"
              width="50"
              height="50"
              alt="Link to my Github account"
              priority
              className={homeStyles.githubIcon}
            />
          </a>
        </article>
        <article className={homeStyles.article}>
          <Link href="/projects">
            <a className={homeStyles.ignoreLink}>
              <section className={homeStyles.section}>
                <p>
                  Want to read some boring articles about projects/work I have
                  done?
                </p>
                <p>
                  Head on over to <a>Projects</a>.
                </p>
              </section>
            </a>
          </Link>
          <Link href="/gallery">
            <a className={homeStyles.ignoreLink}>
              <section className={homeStyles.section}>
                <p>Want to see some photographs I took?</p>
                <p>
                  Visit the <a>Gallery</a>.
                </p>
              </section>
            </a>
          </Link>
          <Link href="/about">
            <a className={homeStyles.ignoreLink}>
              <section className={homeStyles.section}>
                <p>Want to find out more about me?</p>
                <p>
                  I would suggest taking a look at <a>About</a>.
                </p>
              </section>
            </a>
          </Link>
        </article>
      </main>
    </div>
  );
}
