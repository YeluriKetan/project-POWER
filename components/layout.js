import Head from "next/head";
import styles from "./layout.module.scss";
import Link from "next/link";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
      </Head>
      <Header projects></Header>
      <main>
        <div className={styles.container}>
          <div className={styles.backToHome}>
            <Link href="/projects">
              <a>← Back to Projects</a>
            </Link>
          </div>
          {children}
          <div className={styles.backToHome}>
            <Link href="/projects">
              <a>← Back to Projects</a>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
