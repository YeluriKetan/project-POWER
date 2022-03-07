import Header from "./../components/header";
import Link from "next/link";
import Date from "./../components/date";
import utilStyles from "../styles/utils.module.scss";
import { getSortedPostsData } from "../lib/posts";
import Head from "next/head";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Project({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <Header projects></Header>
      <main
        className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.topMargin2}`}
      >
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
