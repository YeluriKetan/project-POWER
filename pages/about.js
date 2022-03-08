import Header from "./../components/header";
import Head from "next/head";
import Image from "next/image";
import aboutStyles from "../styles/About.module.scss";
import utilStyles from "../styles/utils.module.scss";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Personal Website of Yeluri Ketan" />
        <title>About</title>
      </Head>
      <Header about></Header>
      <main className={aboutStyles.main}>
        <Image
          src="/images/profile.jpg"
          width={250}
          height={250}
          alt="Yeluri Ketan"
          className={utilStyles.borderCircle}
        />
        <section className={aboutStyles.section}>
          Hello, I am Yeluri Ketan.
        </section>
        <section className={aboutStyles.section}>
          <h3>Education</h3>
          <p>Bachelor of Computing in Computer Science (with Honours)</p>
          <ul>
            <li>National University of Singapore</li>
            <li>
              Cumulative Average Points: 4.58/5.00 (Expected Honors with
              Distinction)
            </li>
            <li>
              Expected Focus Area in Artificial Intelligence and Algorithms &
              Theory
            </li>
            <li>Minor in Mathematics</li>
          </ul>
        </section>
        <section className={aboutStyles.section}>
          <h3>Programming Languages and their respective libraries</h3>
          <p className={aboutStyles.subtitle}>
            (ranked in terms of proficiency)
          </p>
          <ul className={aboutStyles.languagesList}>
            <li>
              <p>Java</p>
              <p>JavaFX</p>
            </li>
            <li>
              <p>C++</p>
              <p>STL</p>
            </li>
            <li>
              <p>Python</p>
              <p>Cryptodome, Pandas</p>
            </li>
            <li>
              <p>HTML, CSS, JS</p>
              <p>ReactJS, NextJS, MaterialUI</p>
            </li>
          </ul>
        </section>
        <section className={aboutStyles.section}>
          <h3>Notable projects</h3>
          <ul>
            <li>
              <Link href="/projects/war">
                <a>Project WAR</a>
              </Link>
            </li>
            <li>
              <Link href="/projects/dollar-finder">
                <a>Dollar Finder</a>
              </Link>
            </li>
          </ul>
        </section>
        <section className={aboutStyles.section}>
          <h3>CCAs</h3>
          <ul>
            <li>
              Chief Officer for Ground-Up Initiatives, Pioneer House Student
              Council, NUS
              <br />
              <small className={utilStyles.lightText}>
                Guided and facilitated 10+ initiatives and interest groups in
                the Pioneer House resident community in reaching their full
                potential
              </small>
            </li>
            <li>
              Team Lead, Pioneer House Media Team, NUS
              <br />
              <small className={utilStyles.lightText}>
                Initiated and established the Media Team as an asset to Pioneer
                House, with photography being the main focus
              </small>
            </li>
          </ul>
        </section>
        <section className={aboutStyles.section}>
          <h3>Interests</h3>
          <ul>
            <li>Algorithms and Theory</li>
            <li>Artificial Intelligence</li>
            <li>Cryptography</li>
            <li>Competitive Programming</li>
          </ul>
        </section>
      </main>
    </>
  );
}
