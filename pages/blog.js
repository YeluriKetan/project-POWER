import Header from "../components/header";
import Link from "next/link";
import Date from "../components/date";
import utilStyles from "../styles/utils.module.scss";
import projectsStyles from "../styles/Projects.module.scss";
import { getSortedBlogData } from "../lib/blog";
import Head from "next/head";
import Footer from "../components/footer";

export async function getStaticProps() {
  const allBlogData = getSortedBlogData();
  return {
    props: {
      allBlogData,
    },
  };
}

export default function Blog({ allBlogData }) {
  return (
    <div className={utilStyles.page}>
      <Head>
        <title>Blog</title>
      </Head>
      <Header page="blog"></Header>
      <main className={projectsStyles.main}>
        <ul className={projectsStyles.list}>
          {allBlogData.map(({ id, date, title, intro }) => (
            <li className={projectsStyles.listItem} key={id}>
              <Link href={`/blog/${id}`}>
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
