import Head from "next/head";
import styles from "../styles/Layout.module.scss";
import utilStyles from "../styles/utils.module.scss";
import Link from "next/link";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children, header_highlight, parent_page }) {
  return (
    <div className={utilStyles.page}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
      </Head>
      <Header page={header_highlight}></Header>
      <main>
        <div className={styles.container}>
          <div className={styles.backToHome}>
            <Link href={"/" + parent_page.toLowerCase()}>
              <a>← Back to {parent_page}</a>
            </Link>
          </div>
          {children}
          <div className={styles.backToHome}>
            <Link href={"/" + parent_page.toLowerCase()}>
              <a>← Back to {parent_page}</a>
            </Link>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
