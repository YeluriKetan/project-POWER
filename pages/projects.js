import Header from "./../components/header";
import Link from "next/link";
import Date from "./../components/date";
import utilStyles from "../styles/utils.module.scss";
import { getSortedProjectsData } from "../lib/projects";
import Head from "next/head";

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
}

export default function Project({ allProjectsData }) {
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
          {allProjectsData.map(({ id, date, title, intro }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/projects/${id}`}>
                <a>{title}</a>
              </Link>
              {" - "}
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
              <br />
              <small className={utilStyles.lightText}>{intro}</small>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
