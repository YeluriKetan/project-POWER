import Header from "./../components/header";
import Link from "next/link";
import Date from "./../components/date";
import utilStyles from "../styles/utils.module.scss";
import projectsStyles from "../styles/Projects.module.scss";
import { getSortedProjectsData } from "../lib/projects";
import Head from "next/head";
import Footer from "../components/footer";

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
    <div className={utilStyles.page}>
      <Head>
        <title>Projects</title>
      </Head>
      <Header page="projects"></Header>
      <main className={projectsStyles.main}>
        <ul className={projectsStyles.list}>
          {allProjectsData.map(({ id, date, title, intro }) => (
            <li className={projectsStyles.listItem} key={id}>
              <Link legacyBehavior href={`/projects/${id}`}>
                <a className={projectsStyles.link}>
                  <div className={projectsStyles.div}>
                    <h3 className={projectsStyles.projectsTitle}>{title}</h3>
                    <small className={utilStyles.lightText}>
                      <Date dateString={date} formatString="LLL yyyy" />
                    </small>
                    <br />
                    <small className={utilStyles.lightText}>{intro}</small>
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer></Footer>
    </div>
  );
}
